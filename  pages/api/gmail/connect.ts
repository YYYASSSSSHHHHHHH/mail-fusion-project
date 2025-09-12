import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@/lib/supabase/server';
import { encrypt } from '@/lib/encryption';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, email, refreshToken } = req.body;

  if (!userId || !email || !refreshToken) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const encrypted_refresh_token = encrypt(refreshToken);

    const { error } = await supabaseAdmin.from('linked_accounts').insert({
      user_id: userId,
      email,
      encrypted_refresh_token,
    });

    if (error) throw error;

    res.status(200).json({ message: 'Gmail account connected successfully.' });
  } catch (error: any) {
    console.error('Error connecting Gmail account:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
