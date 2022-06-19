import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post("/sign-up", (request, response) => {
  const user = request.body;
  users.push(user);
  response.status(201).send("OK");
});

app.get("/tweets", (request, response) => {
  const tweet = request.body;
  response.send(tweets);
});

app.post("/tweets", (request, response) => {
  const tweet = request.body;
  tweets.push(tweet);
  response.status(201).send("OK");
});


app.listen(5000, () => {
  console.log("Servidor está rodando na porta 5000");
});
