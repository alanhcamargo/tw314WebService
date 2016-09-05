module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("RelacionamentoEmpresaServico", {}, {
        classMethods: {
            associate: (models) => {
                RelacionamentoEmpresaServico.belongsTo(models.RamoAtividade),
                    RelacionamentoEmpresaServico.belongsTo(models.Empresa);
            }
        }
    })
    return RelacionamentoEmpresaServico;
}
