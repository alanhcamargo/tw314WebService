module.exports = (sequelize, DataType) => {
    const Empresa = sequelize.define("Empresa", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome_fantasia: {
            type: DataType.STRING(80),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        razao_social: {
            type: DataType.STRING(80),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        nr_cnpj: {
            type: DataType.STRING(14),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        logradouro: {
            type: DataType.STRING(255),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        nr_logradouro: {
            type: DataType.STRING(255),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        cidade: {
            type: DataType.STRING(100),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        bairro: {
            type: DataType.STRING(100),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },


        uf: {
            type: DataType.STRING(2),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        cep: {
            type: DataType.STRING(8),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        telefone: {
            type: DataType.STRING(11)
        },

        email: {
            type: DataType.STRING(100),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        nome_responsavel: {
            type: DataType.STRING(80),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        cargo_responsavel: {
            type: DataType.STRING(45),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        cpf_responsavel: {
            type: DataType.STRING(11),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_abertura: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_ativacao: {
            type: DataType.DATETIME,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        data_inativacao: {
            type: DataType.DATETIME
        }
    }, {
        classMethods: {
            associate: (models) => {
                Empresa
                    .belongsTo(models.Status)
                    .belongsTo(models.RamoAtividade);
            }
        }
    })
    return Empresa;
};
