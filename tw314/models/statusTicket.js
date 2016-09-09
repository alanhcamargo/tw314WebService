module.exports = (sequelize, DataType) => {
    const StatusTicket = sequelize.define("STT_STATUS_TICKET", {
        stt_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        stt_nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        stt_descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                StatusTicket.hasMany(models.TKC_TICKET);
            }
        }
    })
    return StatusTicket;
};
