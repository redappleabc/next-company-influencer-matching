import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "@/app/api/util/db.js";
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
      status: "申請中",
      collectionStatus: "募集前",
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
    await executeQuery(`
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
      reason VARCHAR(255) NOT NULL,
      companyId int,
      FOREIGN KEY (companyId) REFERENCES company(id)
    )
  `);
    console.log("Table created successfully!");
    const query = `INSERT INTO cases (${query1.slice(
      0,
      -1
    )}) VALUES(${query2.slice(0, -1)})`;

    const result = await executeQuery(query);
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ type: "error", msg: "error" });
  }
}
export async function GET() {
  try {
    const query = `SELECT cases.*, company.companyName
    FROM cases
    LEFT JOIN company ON cases.companyId=company.id
    ORDER BY cases.id;`;
    // const query = `SELECT * FROM cases`;
    const rows = await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error" });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    let query = "UPDATE cases SET ";
    const keys = Object.keys(body);

    keys.map((aKey) => {
      if (aKey !== "id" && aKey !== "companyId" && aKey !== "companyName") {
        query += `${aKey} = '${body[aKey]}', `;
      }
    });
    query = query.slice(0, -2);
    query += " ";
    query += `WHERE id = ${body.id}`;
    executeQuery(query);
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error" });
  }
}
