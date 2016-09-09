module.exports = (sequelize, DataType) => {
    const StatusTicket = sequelize.define("SST_STATUS_TICKET", {
        sst_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        sst_nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        sst_descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                StatusTicket.hasMany(models.Ticket);
            }
        }
    })
    return StatusTicket;
};
