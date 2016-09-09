module.exports = (sequelize, DataType) => {
    const Comentario = sequelize.define("COM_COMENTARIO", {
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
                Comentario.belongsTo(models.CHA_CHAMADO, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Comentario.belongsTo(models.USU_USUARIO, {
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
