module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("USU_USUARIO", {
        usu_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        usu_nome: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        usu_email: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        usu_dtAtivacao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        usu_senha: {
            type: DataType.TEXT
        },

        usu_dtInativacao: {
            type: DataType.DATE
        },

        usu_statusAtivacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Usuario.belongsTo(models.EMP_EMPRESA, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Usuario.belongsTo(models.PER_PERFIL, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    Usuario.hasMany(models.ATD_ATENDIMENTO);
                    Usuario.hasMany(models.CHA_CHAMADO);
                    Usuario.hasMany(models.COM_COMENTARIO);
            }
        }
    })
    return Usuario;
};
