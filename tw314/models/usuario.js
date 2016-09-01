module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(80),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        email: {
            type: DataType.STRING(100),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_ativacao: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_inativacao: {
            type: DataType.DATETIME
        }
    }, {
        classMethods: {
            associate: (models) => {
                Usuario
                    .belongsTo(models.Status)
                    .belongsTo(models.Empresa)
                    .belongsTo(models.Perfil);
            }
        }
    })
    return Usuario;
};
