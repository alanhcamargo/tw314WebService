module.exports = (sequelize, DataType) => {
    const Chamado = sequelize.define("CHA_CHAMADO", {
        cha_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        cha_dtabertura: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cha_assunto: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cha_mensagem: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cha_anexo: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Chamado.belongsTo(models.Usuario, {
                        foreignKey: {
                            allowNull: false
                        }
                    }),
                    Chamado.belongsTo(models.StatusChamado, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Chamado.hasMany(models.Comentario);
            }
        }
    })
    return Chamado;
};
