## Cron job

- Repeatative job to be done on a speciic time.
- node-cron, twilio will be used.
- use dotenv to protect keys.

### Improvements
- add keys to .env
- deploy the application to render, glitch, fly, railway, heroku, AWS, GCP cannot be deployed on netlify, vercel, github pages as they just support static sites and serverless fns.


### Deployment on Render

1. Log in to Render:

    - Go to your Render dashboard.
2. Create a New Cron Job:

    - Click on the “New” button and select “Cron Job”.
3. Fill in Cron Job Details:

    - Name: Give your cron job a name.
    - Schedule: Set the cron schedule (e.g., 0 8 * * * for 8 AM daily).
    - Command: Enter the command to run your script (e.g., node cron-job.js).
4. Add Environment Variables:

    - If your script uses environment variables (e.g., for Twilio credentials), add these in the “Environment Variables” section.