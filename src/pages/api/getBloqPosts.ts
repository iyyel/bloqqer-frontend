import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const bloqId = req.query.bloqId;
        const response = await fetch(`${process.env.BASE_BLOQQER_BACKEND_URL}/post/bloq?bloqId=${bloqId}`, {
            method: 'GET',
        })

        if (!response.ok) {
            throw new Error(`API error with status: ${response.status}, message: ${await response.text()}`)
        }

        const data = await response.json()
        return res.status(200).json(data);
    } catch (error: any) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        console.error('Error fetching posts:', message)
        res.status(500).json({ error: message })
    }
}