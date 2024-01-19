import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";
import { RowDataPacket } from "mysql";
interface RowType extends RowDataPacket {
  // Define the structure of your row
  id: number;
  caseType: string;
  caseName: string;
  caseContent: string;
  wantedHashTag: string;
  wantedSNS: string;
  casePlace: string;
  collectionStart: string;
  collectionEnd: string;
  caseEnd: string;
  collectionCnt: string;
  addtion: string;
  status: string;
  date: string;
  // Add any other fields you have in your table
}
export async function POST(request: NextRequest) {
  try {
    let body = await request.json();
    const today = new Date();
    const todayString = `${today.getFullYear()}/${
      today.getMonth() + 1
    }/${today.getDate()}`;
    const defaultValues = {
      date: todayString,
    };
    body = { ...body, ...defaultValues };
    let query1 = "";
    let query2 = "";
    const keys = Object.keys(body);
    keys.map((aKey) => {
      query1 += aKey + ",";
      query2 += "'" + body[aKey] + "',";
    });
    // insertQuery += `'${body["ds"]}'`;
    await connection.query(`
    CREATE TABLE IF NOT EXISTS cases (
      id INT AUTO_INCREMENT PRIMARY KEY,
      caseType VARCHAR(255) NOT NULL,
      caseName VARCHAR(255) NOT NULL,
      caseContent VARCHAR(255) NOT NULL,
      wantedHashTag VARCHAR(255) NOT NULL,
      wantedSNS VARCHAR(255) NOT NULL,
      casePlace VARCHAR(255) NOT NULL,
      collectionStart VARCHAR(255) NOT NULL,
      collectionEnd VARCHAR(255) NOT NULL,
      caseEnd VARCHAR(255) NOT NULL,
      collectionCnt VARCHAR(255) NOT NULL,
      addition VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      collectionStatus VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,
      companyId int,
      FOREIGN KEY (companyId) REFERENCES company(id)
    )
  `);
    console.log("Table created successfully!");
    const query = `INSERT INTO cases (${query1.slice(
      0,
      -1
    )}) VALUES(${query2.slice(0, -1)})`;

    const result = await connection.query(query);
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ type: "error", msg: "error" });
  }
}
export async function GET(request: NextRequest) {
  try {
    const query = `SELECT cases.*, company.companyName
    FROM cases
    LEFT JOIN company ON cases.companyId=company.id
    ORDER BY cases.id;`;
    // const query = `SELECT * FROM cases`;
    const rows = await new Promise((resolve, reject) => {
      connection.query(query, (error, rows) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(rows);
      });
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    let query = "UPDATE cases SET ";
    const keys = Object.keys(body);

    keys.map((aKey) => {
      if (aKey !== "id" && aKey !== "companyId") {
        query += `${aKey} = '${body[aKey]}', `;
      }
    });
    query = query.slice(0, -2);
    query += " ";
    query += `WHERE id = ${body.id}`;
    const result = await connection.query(query);
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error", msg: "no table exists" });
  }
}
