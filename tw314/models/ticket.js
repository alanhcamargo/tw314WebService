module.exports = (sequelize, DataType) => {

    const Ticket = sequelize.define("tkc_ticket", {
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
                Ticket.belongsTo(models.emp_empresa, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.belongsTo(models.svc_servico, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.belongsTo(models.stt_status_ticket, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Ticket.hasMany(models.atd_atendimento);
            }
        }
    })
    return Ticket;
}
