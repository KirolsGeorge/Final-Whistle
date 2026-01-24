import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch('https://api.football-data.org/v4/competitions/CL/teams', {
      headers: {
        'X-Auth-Token': process.env.VITE_API_KEY, // keep key secret
      } as HeadersInit,
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch teams' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}
