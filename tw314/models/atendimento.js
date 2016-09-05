module.exports = (sequelize, DataType) => {

    const Atendimento = sequelize.define("Atendimento", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data_hora_inicio: {
            type: DataType.DATE,
            defaultValue: sequelize.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        data_hora_fim: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            validate: {
                notEmpty: true
            }
        }

    }, {
        classMethods: {
            associate: (models) => {
                Atendimento.belongsTo(models.Usuario),
                    Atendimento.belongsTo(models.Status);
            }
        }
    })
    return Atendimento;
}
