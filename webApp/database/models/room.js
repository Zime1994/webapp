
module.exports = function (sequelize, DataTypes) {
    const room = sequelize.define("room", {
        idRooms: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        tag: {
            type : DataTypes.INTEGER,
            defaultValue: 0
        },
      
        isLight: {
            type : DataTypes.INTEGER,
            defaultValue: 1
        },
        isHeating: {
            type : DataTypes.INTEGER,
            defaultValue: 1
        },
        isComputer: {
            type : DataTypes.INTEGER,
            defaultValue: 0
        },
        isBeamer: {
            type : DataTypes.INTEGER,
            defaultValue: 0
        },
        isWindow: {
            type : DataTypes.INTEGER,
            defaultValue: 0
        }},
        {
        freezeTableName: true,
        tableName: 'rooms',
        timestamps: true
    });

    room.sync().then(function() {
        console.log('Item table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return room;
};
