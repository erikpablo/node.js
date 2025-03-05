const { Router } = require("express");

const UsersController = require('../controllers/UsersControllers')
const usersRoutes = Router();

function myMiddleware(request, response, next ) {
    console.log("você passou pelo middleware ")
    if(!request.body.isAdmin) {
        return response.status(404).json({ message: "you are not authorized" })
    }
    next();
};



const usersController = new UsersController();

usersRoutes.post('/', myMiddleware, usersController.create);

module.exports = usersRoutes; 