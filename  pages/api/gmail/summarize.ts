import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@/lib/supabase/server';
import { summarizeEmail } from '@/lib/gemini';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { userId, emailId, emailBody } = req.body;

    if (!userId || !emailId || !emailBody) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // 1. Check for a cached summary
        const { data: cachedSummary, error: cacheError } = await supabaseAdmin
            .from('email_summaries')
            .select('summary')
            .eq('user_id', userId)
            .eq('email_id', emailId)
            .single();

        if (cachedSummary) {
            return res.status(200).json({ summary: cachedSummary.summary, source: 'cache' });
        }

        // 2. If not cached, generate a new summary
        const newSummary = await summarizeEmail(emailBody);

        // 3. Cache the new summary in Supabase
        const { error: insertError } = await supabaseAdmin
            .from('email_summaries')
            .insert({
                user_id: userId,
                email_id: emailId,
                summary: newSummary
            });
        
        if (insertError) {
            console.error("Failed to cache summary:", insertError);
            // Non-critical error, so we can still return the summary
        }
        
        res.status(200).json({ summary: newSummary, source: 'gemini' });

    } catch (error: any) {
        console.error("Error in summarization process:", error);
        res.status(500).json({ error: 'Failed to summarize email', details: error.message });
    }
}
