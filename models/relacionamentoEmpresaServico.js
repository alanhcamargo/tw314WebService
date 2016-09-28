module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("relacionamento_emp_svc", {
        status_ativacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RelacionamentoEmpresaServico.hasMany(models.ticket)
            }
        }
    })
    return RelacionamentoEmpresaServico;
}
