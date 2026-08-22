const http = require("http");

http.get("http://localhost:3000/health", (res) => {
    if (res.statusCode === 200) {
        console.log("Health check passed!");
        process.exit(0);
    } else {
        console.log(`Health check failed! Status: ${res.statusCode}`);
        process.exit(1);
    }
}).on("error", (err) => {
    console.log("Application is not running!");
    console.log(err.message);
    process.exit(1);
});