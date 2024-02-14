const fs = require("fs");
const Handlebars = require("handlebars");

exports.get = (req, res) => {

    let home = fs.readFileSync(__dirname + "/../views/home.hbs", "utf8");

    let compiled_page = Handlebars.compile(home)({
        title: "PetFamily",
        style: {
            background_color: "#2b589f",
            text_color: "#FFFFFF"
        },
        content: {
            logo: "../assets/images/logo.png",
            title: "PetFamily API",
            text: 'API do trabalho final'
        }
    });

    return res.status(200).send(compiled_page)

}