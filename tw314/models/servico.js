module.exports = (sequelize, DataType) => {
    const Servico = sequelize.define("Servico", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45)
            allowNull: false
            validate {
                notEmpty: true
            }
        },

        descricao: {
            type: DataType.STRING
            allowNull: false
            validate {
                notEmpty: true
            }
        },

        sigla: {
            type: DataType.STRING(2)
            allowNull: false
            validate {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Servico.belongsTo(models.RamoAtividade)
            }
        }
    })
    return Servico;
};
