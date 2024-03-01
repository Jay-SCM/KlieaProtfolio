
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hisako1086',
    database: 'nextjs_chat'
});

export default connection;
