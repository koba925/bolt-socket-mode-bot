const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.event("app_home_opened", async ({ event, say }) => {
    await say("Hello, world!");
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log("App is running in socket mode.");
})();
