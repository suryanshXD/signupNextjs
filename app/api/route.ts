import { log } from "console";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  return Response.json({
    msg: "Account Created",
  });
}
