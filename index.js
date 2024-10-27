const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

// 기본 경로 처리
app.get("/", (req, res) => {
    res.end("Hello world");
});

// /test 경로 처리
app.get("/test", (req, res) => {
    res.end("<html><head><title>Test Title</title></head>\
        <body><h1>Test</h1></body></html>");
});

// /index 경로에서 index.html 파일 제공
app.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "index.html"));
});

app.get("/class", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "class.html"));
});

app.get("/room", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "room.html"));
});

app.get("/view", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "view.html"));
});

app.get("/write", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "write.html"));
});

// /mycoolapp 경로 처리
app.get('/mycoolapp', (req, res) => {
    res.send("Hello from the root application URL");
});

// 서버 실행
app.listen(app.get('port'), () => {
    console.log(`Express server running on port ${app.get('port')}`);
});