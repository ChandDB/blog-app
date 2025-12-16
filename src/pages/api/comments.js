import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      data: comments,
    });
  }
  res.status(405).json({ message: "Method not allowed" });
}
