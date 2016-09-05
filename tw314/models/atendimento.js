module.exports = (sequelize, DataType) => {

    const Atendimento = sequelize.define("Atendimento", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data_hora_inicio: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_hora_fim: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            validate {
                notEmpty: true
            }
        }

    }, {
        classMethods: {
            associate: (models) => {
                Atendimento
                    .belongsTo(models.Usuario)
                    .belongsTo(models.Status);
            }
        }
    })
    return Atendimento;
}
