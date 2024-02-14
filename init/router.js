module.exports = (app) => {

    app.use('/', require("../routes/home.routes"));
    app.use('/dogs', require('../routes/dog.routes'));
    app.use('/auth', require('../routes/auth.routes'));
    app.use('/questions', require('../routes/question.routes'));
    app.use('/quizzes', require('../routes/quiz.routes'));
    app.use('/users/levels', require('../routes/userlevel.routes'));
    app.use('/users', require('../routes/user.routes'));
    app.use('/emails', require('../routes/email.routes'));
    app.use('/sponsors', require('../routes/sponsor.routes'));
    app.use('/experts', require('../routes/expert.routes'));
}