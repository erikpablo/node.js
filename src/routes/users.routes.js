const { Router, request } = require("express");

const UsersController = require('../controllers/UsersControllers')
const usersRoutes = Router();

function myMiddleware(request, response, next ) {
    console.log("você passou pelo middleware ")
    if(!request.body.isAdmin) {
        return response.status(404).json({ message: "you are not authorized" })
    }
    next();
};

// verificação de email 

/* 
function validEmail(request, response, next) {
     if(!request.body.email || !request.body.email.includes("@gmail.com")) {
         response.status(400).json({ message: "email is not valid" })
     }

    next()
 };
*/

const usersController = new UsersController();

usersRoutes.post('/', myMiddleware, usersController.create);

module.exports = usersRoutes; 