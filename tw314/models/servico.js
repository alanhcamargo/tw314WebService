module.exports = (sequelize, DataType) => {
    const Servico = sequelize.define("svc_servico", {
        svc_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        svc_nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        svc_descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        svc_sigla: {
            type: DataType.STRING(2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        svc_statusAtivacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Servico.belongsTo(models.rma_ramoatividade),
                Servico.hasMany(models.esv_relacionamento_emp_svc);
            }
        }
    })
    return Servico;
};
