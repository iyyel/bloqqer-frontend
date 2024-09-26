import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await fetch(`https://localhost:7062/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.body,
        })

        if (!response.ok) {
            throw new Error(`API error with status: ${response.status}, message: ${await response.text()}`)
        }

        const data = await response.json()
        return res.status(200).json(data);
    } catch (error: any) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        console.error('Error logging in:', message)
        res.status(500).json({ error: message })
    }
}