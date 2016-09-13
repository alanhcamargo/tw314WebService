module.exports = (sequelize, DataType) => {
    const Empresa = sequelize.define("emp_empresa", {
        emp_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        emp_nomeFantasia: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_razaoSocial: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_nrCnpj: {
            type: DataType.STRING(14),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_logradouro: {
            type: DataType.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_nrLogradouro: {
            type: DataType.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_cidade: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_uf: {
            type: DataType.STRING(2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_cep: {
            type: DataType.STRING(8),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_pais: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_telefone: {
            type: DataType.STRING(11)
        },

        emp_email: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_nomeResponsavel: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_cargoResponsavel: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_cpfResponsavel: {
            type: DataType.STRING(11),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_dtAbertura: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_dtAtivacao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        emp_dtInativacao: {
            type: DataType.DATE
        },

        emp_statusAtivacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: models => {
                Empresa.belongsTo(models.rma_ramoatividade),
                    Empresa.hasMany(models.esv_relacionamento_emp_svc),
                    Empresa.hasMany(models.usu_usuario);
            }
        }
    })
    return Empresa;
};
