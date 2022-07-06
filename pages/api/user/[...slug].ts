import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string[] }
  console.log(req.body);
  
  res.end(`Post: ${slug.join(", ")}`)
}
