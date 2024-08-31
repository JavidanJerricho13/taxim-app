import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    if (!sql) {
      console.log("NEON didnt connect");
    } else {
      console.log("NEON connected");
    }

    const response = await sql`SELECT * FROM drivers`;

    return Response.json({ data: response });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error });
  }
}
