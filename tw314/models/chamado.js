module.exports = (sequelize, DataType) => {
    const Chamado = sequelize.define("Chamado", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data_abertura: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        data_atualizacao: {
            type: DataType.DATE
        },

        assunto: {
            type: DataType.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        mensagem: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Chamado.belongsTo(models.Status),
                    Chamado.belongsTo(models.Usuario, {
                        foreignKey: {
                            name: 'usuario_abertura',
                            allowNull: false
                        }
                    }),
                    Chamado.belongsTo(models.Usuario, {
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
