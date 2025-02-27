const { Router } =  require("express");

const userRoutes = Router()

userRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body;

    response.json({ name, email, password });
});

// para espor minha rotas, para quem quiser usar
module.exports = userRoutes;