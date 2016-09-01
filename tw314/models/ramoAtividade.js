module.exports = (sequelize, DataType) => {
    const RamoAtividade = sequilize.define("RamoAtividade", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45),
            allowNull: false
            validate {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RamoAtividade
                    .belongTo(models.Status)
                    .hasMany(models.Servico)
            }
        }
    })
    return RamoAtividade;
};
