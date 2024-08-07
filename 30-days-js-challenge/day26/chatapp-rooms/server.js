const WebSocket = require("ws");
const http = require("http");
const url = require("url");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Room management
const rooms = new Map(); // Map of room IDs to room data

wss.on("connection", (ws, req) => {
    const queryParams = url.parse(req.url, true).query;
    let username = null;
    let roomId = queryParams.roomId;

    if (!roomId || !rooms.has(roomId)) {
        if (roomId) {
            rooms.set(roomId, { clients: new Set() });
            ws.send(
                JSON.stringify({
                    type: "roomStatus",
                    message: `Room ${roomId} has been created.`,
                })
            );
        }
        roomId = roomId || generateRoomId();
        rooms.set(roomId, { clients: new Set([ws]) });
    } else {
        rooms.get(roomId).clients.add(ws);
        ws.send(
            JSON.stringify({
                type: "roomStatus",
                message: `Joined room ${roomId}.`,
            })
        );
    }

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
            rooms.get(roomId).clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(chatMessage));
                }
            });
        } else if (parsedMessage.type === "typing") {
            const typingNotification = {
                type: "typing",
                username: parsedMessage.username,
            };
            rooms.get(roomId).clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(typingNotification));
                }
            });
        }
    });

    ws.on("close", () => {
        if (rooms.has(roomId)) {
            rooms.get(roomId).clients.delete(ws);
            if (rooms.get(roomId).clients.size === 0) {
                rooms.delete(roomId); // Remove the room if no clients are left
            }
        }
    });
});

function generateRoomId() {
    return Math.random().toString(36).substr(2, 9); // Simple room ID generator
}

server.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening");
});
