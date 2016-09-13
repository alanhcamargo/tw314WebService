module.exports = (sequelize, DataType) => {
    const StatusChamado = sequelize.define("stc_status_chamado", {
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
                StatusChamado.hasMany(models.cha_chamado, {
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
