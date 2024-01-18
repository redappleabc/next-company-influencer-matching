import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";
import { RowDataPacket } from "mysql";
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
    let body = await request.json();
    const today = new Date();
    const todayString = `${today.getFullYear()}/${
      today.getMonth() + 1
    }/${today.getDate()}`;
    const defaultValues = {
      status: "停止中",
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
      paymentFailed VARCHAR(255) NOT NULL,
      monthlyCollectionCnt VARCHAR(255) NOT NULL,
      concurrentCollectionCnt VARCHAR(255) NOT NULL,
      plan VARCHAR(255) NOT NULL,
      freeAccount BOOLEAN NOT NULL DEFAULT FALSE,
      userId int,
      date VARCHAR(255) NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);
    console.log("Table created successfully!");
    const query = `INSERT INTO company (${query1.slice(
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
export async function GET() {
  try {
    const query = "SELECT * FROM company";
    const rows = await new Promise<RowType[]>((resolve, reject) => {
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
    return NextResponse.json({ type: "error", msg: "no table exists" });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    let query = "UPDATE company SET ";
    const keys = Object.keys(body);
    console.log(body);

    console.log(body.freeAccont);
    console.log(body.freeAccont == 1);
    console.log(body.freeAccont == true);

    const freeAccont = body.freeAccont == 1 || body.freeAccont == true ? 1 : 0;
    console.log("fre", body.freeAccount, freeAccont);

    keys.map((aKey) => {
      if (aKey !== "id" && aKey !== "userId") {
        if (aKey === "freeAccount") {
          query += `${aKey} = ${freeAccont}, `;
        } else {
          query += `${aKey} = '${body[aKey]}', `;
        }
      }
    });
    query = query.slice(0, -2);
    query += " ";
    query += `WHERE id = ${body.id}`;
    const result = await connection.query(query);
    return NextResponse.json(body);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error", msg: "no table exists" });
  }
}
