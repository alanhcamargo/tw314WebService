module.exports = (sequelize, DataType) => {

    const Atendimento = sequelize.define("atendimento", {
        data_hora_inicio: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        data_hora_fim: {
            type: DataType.DATE
        }

    }, {
        classMethods: {
            associate: (models) => {
                Atendimento.belongsTo(models.ticket, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Atendimento.belongsTo(models.usuario, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Atendimento.belongsTo(models.status_atendimento, {
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
