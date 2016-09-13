module.exports = (sequelize, DataType) => {
    const RamoAtividade = sequelize.define("rma_ramoatividade", {
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
                RamoAtividade.hasMany(models.svc_servico),
                    RamoAtividade.hasMany(models.emp_empresa)
            }
        }
    })
    return RamoAtividade;
};
