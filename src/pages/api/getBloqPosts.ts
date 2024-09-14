import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const bloqId = req.query.bloqId;
    const resp = await fetch(`${process.env.BASE_BLOQQER_BACKEND_URL}/post/bloq?bloqId=${bloqId}`)
    const data = await resp.json()
    return res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ err: "Error has occured while fetching posts" })
  }
}