import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let userBackup = {
  username:"",
  avatar:""
}

app.post("/sign-up", (request, response) => {
  const user = request.body;
  users.push(user);
  userBackup.username = user.username;
  userBackup.avatar = user.avatar;
  response.send("OK");
});

app.post("/tweets", (request, response) => {
  const tweet = request.body;

  tweets.push({...userBackup, ...tweet});
  response.send("OK");
});

app.get("/tweets", (request, response) => {
  
  if(tweets.length<=10){
    response.send(tweets.reverse());
  }else {
    const tweetsReturn = tweets.slice(tweets.length-10, tweets.length);
    response.send(tweetsReturn.reverse());
  }

});



app.listen(5000, () => {
  console.log("Servidor está rodando na porta 5000");
});
