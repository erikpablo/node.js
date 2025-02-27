const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post('/users', (request, response) => {
    const { name, email, password } = request.body;

    response.Json({ name, email, password });
});

module.exports = usersRoutes;