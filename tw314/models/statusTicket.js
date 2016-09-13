module.exports = (sequelize, DataType) => {
    const StatusTicket = sequelize.define("stt_status_ticket", {
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
                StatusTicket.hasMany(models.tkc_ticket);
            }
        }
    })
    return StatusTicket;
};
