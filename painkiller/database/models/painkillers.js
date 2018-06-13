
module.exports = function (sequelize, DataTypes) {
    const painkillers = sequelize.define("painkillers", {
        idPainkiller: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },{
        freezeTableName: true,
        tableName: 'painkillers',
        timestamps: true
    });

    painkillers.sync().then(function() {
        console.log('Item table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return painkillers;
};
