import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const resp = await fetch(`${process.env.BASE_BLOQQER_BACKEND_URL}/bloq/metadata`)
    const data = await resp.json()
    return res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ err: "Error has occured while fetching bloqs" })
  }
}