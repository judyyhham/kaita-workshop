// use express library
// html 파일 렌더링 불가능 (안 쓰면 여러 파일들 다운로드 필요함)
const express = require("express")

// 렌더링 용
// define the app using express framework 프레임워크를 사용해서 앱을 정의 합니다
const app = express()

//public 폴더 안에 저희가 필요한 웹사이트 파일이 있다고 말합니다
app.use(express.static("public"))

// REST 웹사이트 방문, 핵스 책크, rest api define, 옵셔널
app.get("/", (req, res) => {
    res.send("Hello, KAITA")
})
//이 밑에 두개 기본적
// Make the Server
const server = require("http").createServer({}, app)

// At Port 3000, Serve the webpage
server.listen(3000, function() {
    console.log("HTTP listening on port 3000")
})