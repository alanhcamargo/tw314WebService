module.exports = (sequelize, DataType) => {

    const Ticket = sequelize.define("ticket", {
        numero_ticket: {
            type: DataType.INTEGER,
            primaryKey: true
        },

        data_hora_emissao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            primaryKey: true
        },

        codigo_acesso: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Ticket.belongsTo(models.status_ticket, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Ticket.hasOne(models.atendimento, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
            }
        }
    })
    return Ticket;
}
