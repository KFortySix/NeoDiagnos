module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },

    });

    return Usuario;
};