const express = require('express'); //express를 설치했기 때문에 가져올 수 있다.
const mdbConn = require('./mariaDBConn.js')
const dbconn = require('./consts.js');
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

const pt = process.env.PORT || 5200;

const corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("체크");
  res.json({
    success: true,
    data: "test",
  });
});

app.post("/connect", (req, res) => {
  var host = req.query.host;
  var port = req.query.port;
  var database = req.query.database;
  var user = req.query.user;
  var password = req.query.password;
  module.exports = {
    DBHost: host,
    DBPort: port,
    DBUser: user,
    DBPass: password,
    connectionLimit: 5
  }
});

app.listen(pt, () => {
  console.log(`listening on ${pt}`);
});

app.listen(pt);