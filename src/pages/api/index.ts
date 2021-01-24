import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "GET") {
    return handleGET(res);
  } else if (req.method === "POST") {
    return handlePOST(req, res);
  } else {
    return res.status(500).json({
      error: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};

async function handleGET(res: NextApiResponse) {
  const result = "Hello world!";

  return res.status(200).json(result);
}

async function handlePOST(_req: NextApiRequest, res: NextApiResponse) {
  const result = "You posted!";

  return res.status(201).json(result);
}
