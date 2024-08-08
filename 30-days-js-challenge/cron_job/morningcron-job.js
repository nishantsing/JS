// cron-job.js
const cron = require("node-cron");
const twilio = require("twilio");

// Twilio credentials from your Twilio account
const accountSid = "your_twilio_account_sid";
const authToken = "your_twilio_auth_token";
const client = new twilio(accountSid, authToken);

// Define the message content and recipient
const messageContent = "Good Morning!";
const phoneNumber = "+1234567890"; // Replace with the recipient's phone number
const whatsappNumber = "whatsapp:+1234567890"; // Replace with the recipient's WhatsApp number

// Schedule the job to run at 8:00 AM every day
cron.schedule("0 8 * * *", () => {
    console.log("Sending Good Morning message...");

    // Send SMS
    client.messages
        .create({
            body: messageContent,
            from: "+0987654321", // Replace with your Twilio phone number
            to: phoneNumber,
        })
        .then((message) => console.log("SMS sent:", message.sid))
        .catch((error) => console.error("Error sending SMS:", error));

    // Send WhatsApp message
    client.messages
        .create({
            body: messageContent,
            from: "whatsapp:+0987654321", // Replace with your Twilio WhatsApp number
            to: whatsappNumber,
        })
        .then((message) => console.log("WhatsApp message sent:", message.sid))
        .catch((error) =>
            console.error("Error sending WhatsApp message:", error)
        );
});
