
module.exports = function (sequelize, DataTypes) {
    const useraction = sequelize.define("useraction", {
        idUserActions: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idRooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: ''
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: ''
        },
        isLight: {
          type : DataTypes.INTEGER,
          defaultValue: 0
        },
        isHeating: {
          type : DataTypes.INTEGER,
          defaultValue: 0
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
        },
        points: {
          type : DataTypes.INTEGER,
          defaultValue: 0
        },
        registerTimeUnix : {
            type : DataTypes.BIGINT(30),
            defaultValue: 0
        }
    },{
        freezeTableName: true,
        tableName: 'useraction',
        timestamps: true
    });

    useraction.sync().then(function() {
        console.log('Item table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return useraction;
};
