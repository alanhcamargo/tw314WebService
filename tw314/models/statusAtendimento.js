module.exports = (sequelize, DataType) => {
    const StatusAtendimento = sequelize.define("STA_STATUS_ATENDIMENTO", {
        sta_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        sta_nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        sta_descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                StatusAtendimento.hasMany(models.ATD_ATENDIMENTO, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
            }
        }
    })
    return StatusAtendimento;
};
