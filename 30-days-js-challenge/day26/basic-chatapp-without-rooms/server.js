const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    let username = null;

    // message recieved from client
    ws.on("message", (message) => {
        const parsedMessage = JSON.parse(message);

        if (parsedMessage.type === "setUsername") {
            username = parsedMessage.username;
        } else if (parsedMessage.type === "chatMessage") {
            const chatMessage = {
                type: "chatMessage",
                username: username,
                message: parsedMessage.message,
            };
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(chatMessage));
                }
            });
        } else if (parsedMessage.type === "typing") {
            const typingNotification = {
                type: "typing",
                username: parsedMessage.username,
            };
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(typingNotification));
                }
            });
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

server.listen(8080, () => {
    console.log("Server is listening on ws://localhost:8080");
});
