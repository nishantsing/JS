const path = require("path");

module.exports = {
    entry: "./importDay13.js", // source file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
};
