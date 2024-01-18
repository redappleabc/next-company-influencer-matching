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
export async function PUT(request: NextRequest) {
  try {
    const { email, type } = await request.json();
    const randomString = generateRandomString();

    await connection.query(`
      INSERT INTO users (email,password ,role)
      VALUES ('${email}','${randomString}','${type}')
      `);
    return NextResponse.json({
      type: "success",
      data: { email, password: randomString },
    });
  } catch (e) {
    console.error("Error creating user record:", e);
    return NextResponse.json({ type: "error" });
  }
}
function generateRandomString() {
  const length = Math.floor(Math.random() * 10); // Generate a random length less than 10
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
