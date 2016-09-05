module.exports = (sequelize, DataType) => {
    const Chamado = sequelize.define("Chamado", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data_abertura: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_atualizacao: {
            type: DataType.DATETIME
        },

        assunto: {
            type: DataType.STRING(255),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        mensagem: {
            type: DataType.STRING,
            allowNull: false,
            validate {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Chamado
                    .belongsTo(models.Status)
                    .belongsTo(models.Usuario, {
                        foreignKey: {
                            name: 'usuario_abertura',
                            allowNull: false
                        }
                    })
                    .belongsTo(models.Usuario, {
                        foreignKey: {
                            name: 'usuario_resposta'
                        },
                        onDelete: 'CASCADE'
                    });
            }
        }
    })
    return Chamado;
};
