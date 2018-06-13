
module.exports = function (sequelize, DataTypes) {
    const actions = sequelize.define("actions", {
        idActions: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        idPainkiller: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        given: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        registerTimeUnix: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        }
    },{
        freezeTableName: true,
        tableName: 'actions',
        timestamps: true
    });

    actions.sync().then(function() {
        console.log('Item table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return actions;
};
