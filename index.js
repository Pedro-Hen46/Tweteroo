import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());


app.get("/", (request, response) => {

    response.send("Você está na pasta raiz do programa.");
})





app.listen(5000, () => {
    console.log("Servidor está rodando na porta 5000");
});