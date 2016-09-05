module.exports = (sequelize, DataType) => {
    const Perfil = sequelize.define("Perfil", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
            }
        }
    })
    return Perfil;
}
