import { getExpressEntryDraws, EXPRESS_ENTRY_API_URL } from "@/lib/expressEntryDraws";

export const revalidate = 900;

export async function GET() {
  try {
    const draws = await getExpressEntryDraws();
    return Response.json({
      draws,
      source: EXPRESS_ENTRY_API_URL,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json(
      { error: "The official draw feed is temporarily unavailable." },
      { status: 502 }
    );
  }
}
