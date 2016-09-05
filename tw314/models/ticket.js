module.exports = (sequelize, DataType) => {

    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nr_ticket: {
            type: DataType.INTEGER,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_hora_emissao: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        cd_acesso: {
            type: DataType.STRING(8),
            allowNull: false,
            validate {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Ticket
                    .belongsTo(models.Empresa)
                    .belongsTo(models.Servico);
            }
        }
    })
    return Ticket;
}
