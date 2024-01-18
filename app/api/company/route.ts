import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";
import { RowDataPacket } from "mysql";
import { connect } from "http2";
import { log } from "console";
interface RowType extends RowDataPacket {
  // Define the structure of your row
  id: number;
  companyName: string;
  companyNameGana: string;
  representativeName: string;
  representativeNameGana: string;
  responsibleName: string;
  responsibleNameGana: string;
  webSite: string;
  phoneNumber: string;
  emailAddress: string;
  postalCode: string;
  address: string;
  building: string;
  status: string;
  payment: string;
  freeAccount: boolean;
  // Add any other fields you have in your table
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let query1 = "";
    let query2 = "";
    const keys = Object.keys(body);
    keys.map((aKey) => {
      query1 += aKey + ",";
      query2 += "'" + body[aKey] + "',";
    });
    // insertQuery += `'${body["ds"]}'`;
    await connection.query(`
    CREATE TABLE IF NOT EXISTS company (
      id INT AUTO_INCREMENT PRIMARY KEY,
      companyName VARCHAR(255) NOT NULL,
      companyNameGana VARCHAR(255) NOT NULL,
      representativeName VARCHAR(255) NOT NULL,
      representativeNameGana VARCHAR(255) NOT NULL,
      responsibleName VARCHAR(255) NOT NULL,
      responsibleNameGana VARCHAR(255) NOT NULL,
      webSite VARCHAR(255) NOT NULL,
      phoneNumber VARCHAR(255) NOT NULL,
      emailAddress VARCHAR(255) NOT NULL,
      postalCode VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      building VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      payment VARCHAR(255) NOT NULL,
      freeAccount BOOLEAN NOT NULL DEFAULT FALSE
    )
  `);
    console.log("Table created successfully!");
    const query = `INSERT INTO company (${query1.slice(
      0,
      -1
    )}) VALUES(${query2.slice(0, -1)})`;

    const result = await connection.query(query);
    console.log("Record inserted successfully!", "result");
    return NextResponse.json({ res: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ error: error });
  }
}
export async function GET() {
  try {
    const query = "SELECT * FROM company";
    const rows = await new Promise<RowType[]>((resolve, reject) => {
      connection.query(
        "SELECT COUNT(*) AS count FROM users where role = 'admin'",
        (error, rows) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(rows);
        }
      );
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
