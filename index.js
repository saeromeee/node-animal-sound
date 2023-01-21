// ==========서버생성============ //
const express = require("express")
const { WebSocketServer } = require("ws") //ws모듈 호출
const app = express()

app.use(express.static("public"))

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

app.use(cors())//app은 서버를 의미 ()안에 조건을 설정해 어디서 요청하는지에 따라 허용해주거나 차단

// ==========웹소켓 서버 생성=========== //
const wss = new WebSocketServer({ port: 8001 })

// broadcast 메소드 추가
wss.broadcast = (message) => {
  wss.clients.forEach((client) => {
    client.send(message);
  });
};

wss.on("connection", (ws, request) => {
  ws.on("message", (data) => {
    wss.broadcast(data.toString());
  });

  ws.on("close", () => {
    wss.broadcast(`유저 한명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
  });

  wss.broadcast(`유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`)
});
