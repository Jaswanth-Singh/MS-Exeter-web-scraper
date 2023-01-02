const http = require("http");
const fs = require("fs");
const { skillRanking } = require("./js/page_handler/skillsRankingPage");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  
  if (req.url == "/"){
    skillRanking(res);
  }
  else{
    res.end(fs.readFileSync("./htmlTemplate/error_404.html"));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at PORT ${port}`);
});
