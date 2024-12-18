const http = require("http");
const fs = require("fs");

const port = 8080;

const requestHandler = (req, res) => {
  console.log(req.url);
  let fileName = "";
  switch (req.url) {
    case "/home":
      fileName = path.join(__dirname, "html", "home.html");
      break;
    case "/about":
      fileName = path.join(__dirname, "html", "about.html");
      break;
    case "/contact":
      fileName = path.join(__dirname, "html", "contact.html");
      break;
      case "/review":
        fileName = path.join(__dirname, "html", "review.html");
        break;
    default:
   
  fileName = path.join(__dirname, "html","error.html")
  }


  fs.readFile(fileName, (error, result) => {
    if (!error) {
      res.end(result);
    }     
    
  })
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
  if (error) {
    console.log("Server failed to start on port", port);
  return false;
  }
    console.log("Server started on port", port);
    console.log("http://localhost:" +port);
  }
);
module.exports = requestHandler;