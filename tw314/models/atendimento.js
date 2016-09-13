module.exports = (sequelize, DataType) => {

    const Atendimento = sequelize.define("atd_atendimento", {
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
                Atendimento.belongsTo(models.tkc_ticket, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Atendimento.belongsTo(models.usu_usuario, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Atendimento.belongsTo(models.sta_status_atendimento, {
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
