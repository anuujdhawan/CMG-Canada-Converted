import { getPnpDrawFeed } from "@/lib/pnpDraws";

export const revalidate = 14_400;

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const province = searchParams.get("province") || "all";
  const stream = searchParams.get("stream") || "all";
  const feed = getPnpDrawFeed({ province, stream });

  if (!feed) {
    return Response.json({ error: "That province is not available in the PNP draw feed." }, { status: 400 });
  }

  return Response.json(feed);
}
