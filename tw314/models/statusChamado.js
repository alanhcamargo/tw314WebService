module.exports = (sequelize, DataType) => {
    const StatusChamado = sequelize.define("STC_STATUS_CHAMADO", {
        stc_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        stc_nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        stc_descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                StatusChamado.hasMany(models.CHA_CHAMADO, {
                    foreignKey: {
                        allowNull: false
                    },
                    //onDelete: 'CASCADE'
                });
            }
        }
    })
    return StatusChamado;
};
