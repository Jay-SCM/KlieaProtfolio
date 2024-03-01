
import connection from './db';

export const saveMessage = (username, message) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO messages (username, message) VALUES (?, ?)';
        connection.query(sql, [username, message], (err, results) => {
            if (err) reject(err);
            resolve(results.insertId);
        });
    });
};

export const getMessages = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM messages ORDER BY created_at DESC LIMIT 50';
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};
