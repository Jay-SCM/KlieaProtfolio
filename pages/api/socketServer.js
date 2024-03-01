
import { Server } from "socket.io";
import http from "http";

export const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const httpServer = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("hello");
    });

    const io = new Server(httpServer, {
      cors: {
        origin: "*",
      },
    });http://localhost:3000/

    io.on("connection", (socket) => {
      console.log("New client connected");

      socket.on("message", (data) => {
        handleMessage(data); // Handle message received from client
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });

    res.socket.server.io = io;
    res.socket.server.httpServer = httpServer;
  }
  res.end();
};

