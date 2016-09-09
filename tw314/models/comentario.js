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
                Chamado.belongsTo(models.Chamado, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Chamado.belongsTo(models.Usuario, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    });
            }
        }
    })
    return Chamado;
};
