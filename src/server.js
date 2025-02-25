const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send(`
        Mensagem ID: ${id}.
        Para o usuario: ${user}.
    `);
});

app.get("/user", (request, response) => {
    const { page, limit, users } = request.query;

    response.send(`Page: ${page}. Mostrar: ${limit}. Usuários: ${users}`)
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));