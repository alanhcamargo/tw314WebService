module.exports = (sequelize, DataType) => {
    const RamoAtividade = sequelize.define("RMA_RAMOATIVIDADE", {
        rma_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        rma_nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        rma_statusAtivacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RamoAtividade.hasMany(models.SVC_SERVICO),
                    RamoAtividade.hasMany(models.EMP_EMPRESA)
            }
        }
    })
    return RamoAtividade;
};
