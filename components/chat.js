
import {useState, useEffect} from 'react';
// Importing socket.io-client library to establish a connection with the server
import io from 'socket.io-client';
// Creating a socket instance and connecting to the server
const socket = io('http://localhost:3001');

// Exporting a functional component named Chat
export default function Chat(){
    // Initializing state variables for messages and new messages
    const [message, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // useEffect hook to perform side effects in the component
    useEffect(()=>{
        // Listening for 'message' event from the server
        socket.on('message',(msg)=>{
            // Updating the messages state with the new message
            setMessage((prevMessages) => [...prevMessages, msg]);
        });

        // Returning a cleanup function to disconnect the socket when the component unmounts
        return()=>{
            socket.disconnect();
        };
    },[]); // Empty dependency array to ensure the effect only runs once

    // Function to send a message to the server
    const sendMessage = () =>{
        // Emitting 'message' event to the server with the new message
        socket.emit('message',newMessage);
        // Clearing the input field after sending the message
        setNewMessage('');
    };

    // Rendering JSX for the Chat component
    return(
        <div>
            <div>
                {/* Mapping through the messages array and rendering each message */}
                {message.map((msg,index)=> (
                <div key={index}>{msg}</div>
                ))}
            </div>
            {/* Input field for typing a new message */}
            <input type = "text"
            value = {newMessage}
            // Handling onChange event to update the newMessage state
            onChange = {(e) => setNewMessage(e.target.value)} />
            {/* Button to send the typed message */}
            <button onClick = {sendMessage}>Send</button>
        </div>
    );
}
