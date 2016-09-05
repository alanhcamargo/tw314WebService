module.exports = (sequelize, DataType) => {
    const RamoAtividade = sequelize.define("Ramo_Atividade", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RamoAtividade
                    .belongsTo(models.Status)
                    .hasMany(models.Servico)
            }
        }
    })
    return RamoAtividade;
};
