module.exports = (sequelize, DataType) => {
    const Perfil = sequelize.define("PER_PERFIL", {
        per_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        per_nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        per_descricao: {
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
