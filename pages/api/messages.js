
import connection from './db';

export default async function handler(req, res) {
   
    if (req.method === 'POST') {
        // Extract the message data from the request body
        const { username, message } = req.body;

        try {
            // Insert the message into the database
            const sql = 'INSERT INTO messages (username, message) VALUES (?, ?)';
            await connection.query(sql, [username, message]);

            // Send a success response
            res.status(201).json({ success: true, message: 'Message sent successfully' });
        } catch (error) {
            // If an error occurs, send an error response
            res.status(500).json({ success: false, message: 'Failed to send message' });
        }
    } else {
        // If the request method is not supported, send a 405 Method Not Allowed response
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
