module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("esv_relacionamento_emp_svc", {
        esv_statusAtivacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RelacionamentoEmpresaServico.belongsTo(models.rma_ramoatividade, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    RelacionamentoEmpresaServico.belongsTo(models.emp_empresa, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    });
            }
        }
    })
    return RelacionamentoEmpresaServico;
}
