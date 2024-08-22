import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { origin_address, destination_address, origin_latitude, origin_longitude, destination_latitude, destination_longitude, ride_time, fare_price, payment_status, driver_id, user_id } = body;

    const sql = neon(`${process.env.DATABASE_URL}`);

    const response = await sql`
      INSERT INTO rides ( 
          origin_address, 
          destination_address, 
          origin_latitude, 
          origin_longitude, 
          destination_latitude, 
          destination_longitude, 
          ride_time, 
          fare_price, 
          payment_status, 
          driver_id, 
          user_id
      ) VALUES (
          ${origin_address},
          ${destination_address},
          ${origin_latitude},
          ${origin_longitude},
          ${destination_latitude},
          ${destination_longitude},
          ${ride_time},
          ${fare_price},
          ${payment_status},
          ${driver_id},
          ${user_id}
      )
      RETURNING *;
    `;

    return Response.json({ data: response[0] }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
