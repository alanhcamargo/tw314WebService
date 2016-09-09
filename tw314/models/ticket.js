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
                Ticket.belongsTo(models.EMP_EMPRESA, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.belongsTo(models.SVC_SERVICO, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.belongsTo(models.STT_STATUS_TICKET, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.hasMany(models.ATD_ATENDIMENTO);
            }
        }
    })
    return Ticket;
}
