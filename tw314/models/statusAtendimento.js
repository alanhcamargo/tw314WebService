module.exports = (sequelize, DataType) => {
    const StatusAtendimento = sequelize.define("sta_status_atendimento", {
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
                StatusAtendimento.hasMany(models.atd_atendimento, {
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
