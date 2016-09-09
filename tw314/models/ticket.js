module.exports = (sequelize, DataType) => {

    const Ticket = sequelize.define("TKC_TICKET", {
        tkc_nrTicket: {
            type: DataType.INTEGER,
            primaryKey: true
        },

        tkc_dthrEmissao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            primaryKey: true
        },

        tkc_cdAcesso: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Ticket.belongsTo(models.Empresa, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.belongsTo(models.Servico, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.belongsTo(models.statusTicket, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.hasMany(models.Atendimento);
            }
        }
    })
    return Ticket;
}
