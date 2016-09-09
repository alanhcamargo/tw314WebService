module.exports = (sequelize, DataType) => {

    const Atendimento = sequelize.define("ATD_ATENDIMENTO", {
        atd_dthrInicio: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        atd_dthrFim: {
            type: DataType.DATE
        }

    }, {
        classMethods: {
            associate: (models) => {
                Atendimento.belongsTo(models.Ticket, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Atendimento.belongsTo(models.Usuario, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Atendimento.belongsTo(models.Status, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    });
            }
        }
    })
    return Atendimento;
}
