module.exports = (sequelize, DataType) => {
    const Comentario = sequelize.define("com_comentario", {
        com_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        com_dtcomentario: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        com_mensagem: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Comentario.belongsTo(models.cha_chamado, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Comentario.belongsTo(models.usu_usuario, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    });
            }
        }
    })
    return Comentario;
};
