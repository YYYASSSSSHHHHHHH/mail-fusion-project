import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@/lib/supabase/server';
import { decrypt } from '@/lib/encryption';
import { fetchEmails, refreshAccessToken } from '@/lib/google';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // In a real app, you would get the user ID from a verified Supabase JWT
    const { userId } = req.query;

    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const { data: accounts, error } = await supabaseAdmin
            .from('linked_accounts')
            .select('encrypted_refresh_token')
            .eq('user_id', userId);

        if (error || !accounts) throw error || new Error("No accounts found");
        
        const allEmails = [];
        for (const account of accounts) {
            const refreshToken = decrypt(account.encrypted_refresh_token);
            const { access_token } = await refreshAccessToken(refreshToken);
            if(access_token){
                const emails = await fetchEmails(access_token);
                allEmails.push(...emails);
            }
        }

        res.status(200).json({ emails: allEmails });
    } catch (error: any) {
        console.error("Error fetching emails:", error);
        res.status(500).json({ error: 'Failed to fetch emails', details: error.message });
    }
}
