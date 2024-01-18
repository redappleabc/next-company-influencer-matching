import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";

export async function POST(request: NextRequest) {
  try {
    await connection.query(`
          CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
          )
        `);
    console.log("Table created successfully!");

    const result = await connection.query(
      `
          INSERT INTO users (name, email)
          VALUES ('John Doye', 'john@exatmple.com')
        `
    );
    console.log("Record inserted successfully!", result);
    return NextResponse.json({ res: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ error: error });
  }
}
