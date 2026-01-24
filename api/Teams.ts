// /api/teams.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('Missing API_KEY in environment');
      return res.status(500).json({ error: 'Missing API key on server' });
    }

    const response = await fetch('https://api.football-data.org/v4/competitions/CL/teams', {
      headers: { 'X-Auth-Token': apiKey } as HeadersInit,
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Football-data API error', response.status, text);
      return res.status(response.status).json({ error: 'Failed to fetch teams', details: text });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Handler error', err);
    res.status(500).json({ error: 'Server error' });
  }
}
