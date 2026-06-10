import type { NextApiRequest, NextApiResponse } from "next";

type SuccessResponse = { ok: true };
type ErrorResponse = { ok: false; error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body ?? {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  return res.status(200).json({ ok: true });
}
