import mysql from "mysql";
import { promisify } from "util";


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hisako1086",
  database: "nextjs_chat",
  authPlugins: {
    mysql_clear_password: () => Buffer.from("Hisako1086"),
  },
});

// Promisify query method
const query = promisify(connection.query).bind(connection);

connection.connect();

export const handleMessage = async (data) => {
  const { username, message } = data;

  try {
    // Insert message into database
    const results = await query(
      `INSERT INTO messages (username, message) VALUES (?, ?)`,
      [username, message]
    );
    console.log("Message saved to database:", results);
  } catch (error) {
    console.error("Error saving message to database:", error);
  }
};
