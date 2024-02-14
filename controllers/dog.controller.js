const Dog = require('../models/dog.model');
const {
    validationResult
} = require('express-validator');
const DogMessages = require("../messages/dog.messages");

exports.get = (req, res) => {

    Dog.find(req.query, (error, dogs) => {
        if (error) throw error;

        let message = DogMessages.success.s2;

        if (dogs.length < 0)
            message = DogMessages.success.s5;

        message.body = dogs;
        return res.status(message.http).send(message);
    });

}

exports.create = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new Dog({
        name: req.body.name,
        group: req.body.group,
        description: req.body.description,
        level: req.body.level,
        links: req.body.links
    }).save((error, dog) => {
        if (error) throw error;
        let message = DogMessages.success.s0;
        message.body = dog;
        return res.header("location", "/dogs/" + dog._id).status(message.http).send(message);
    });
}

exports.update = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Dog.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, dog) => {
        if (error) throw error;
        if (!dog) return res.status(DogMessages.error.e0.http).send(DogMessages.error.e0);

        let message = DogMessages.success.s1;
        message.body = dog;
        return res.status(message.http).send(message);

    });
}

exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Dog.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(DogMessages.error.e0.http).send(DogMessages.error.e0);
        return res.status(DogMessages.success.s3.http).send(DogMessages.success.s3);

    });
}

exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Dog.findOne({
        _id: req.params.id
    }).populate("comments.user", "name").exec((error, dog) => {
        if (error) throw error;
        if (!dog) return res.status(DogMessages.error.e0.http).send(DogMessages.error.e0);
        let message = DogMessages.success.s2;
        message.body = dog;
        return res.status(message.http).send(message);
    });

}

exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Dog.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(DogMessages.error.e0.http).send(DogMessages.error.e0);
        return res.status(DogMessages.success.s6.http).send(DogMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Dog.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(DogMessages.error.e0.http).send(DogMessages.error.e0);
        return res.status(DogMessages.success.s4.http).send(DogMessages.success.s4);

    });
}