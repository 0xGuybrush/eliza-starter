import {SqlJsDatabaseAdapter} from "@elizaos/adapter-sqljs";
import initSqlJs from "sql.js";

export async function initializeDatabase() {

  const SQL = await initSqlJs();

  const db = new SQL.Database();
  return new SqlJsDatabaseAdapter(db);
}
