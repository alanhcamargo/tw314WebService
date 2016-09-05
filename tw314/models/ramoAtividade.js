module.exports = (sequelize, DataType) => {
    const RamoAtividade = sequelize.define("RamoAtividade", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RamoAtividade.belongsTo(models.Status),
                    RamoAtividade.hasMany(models.Servico),
                    RamoAtividade.hasMany(models.Empresa)
            }
        }
    })
    return RamoAtividade;
};
