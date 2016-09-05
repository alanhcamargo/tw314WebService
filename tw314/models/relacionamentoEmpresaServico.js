module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("RelacionamentoEmpresaServico", {
        classMethods: {
            associate: (models) => {
                RelacionamentoEmpresaServico
                    .belongsTo(models.RamoAtividade)
                    .belongsTo(models.Empresa);
            }
        }
    })
}
