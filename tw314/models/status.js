module.exports = (sequelize, DataType) => {
    const Status = sequelize.define("Status", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate {
                notEmpty: true
            }
        },

        descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate {
                notEmpty: true
            }
        }
    })
    return Status;
};
