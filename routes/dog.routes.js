const express = require('express');
let router = express.Router();
const DogController = require('../controllers/dog.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

//.get(AuthController.checkAuth, DogController.get)
router.route('/')
    .get(AuthController.checkAuth, DogController.get)
    .post(AuthController.checkAuth, [body('name').isString(),
        body('group').isString(),
        body('description').isString(),
        body('level').isInt(),
        body('links.*.types').isAlpha(),
        body('links.*.url').isURL(),
        sanitizeBody('description').whitelist(CONFIG.sanitize.alphabet + CONFIG.sanitize.numerical)
    ], DogController.create);

router.route("/deactivate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], DogController.deactivate);

router.route("/activate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], DogController.activate);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], DogController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], DogController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], DogController.delete);

module.exports = router;