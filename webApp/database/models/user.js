
module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define("user", {
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        nickName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'dfaefafaaret'
        },
        score : {
            type : DataTypes.INTEGER,
            defaultValue: 0
        }
    },{
        freezeTableName: true,
        tableName: 'user',
        timestamps: true
    });

    user.sync().then(function() {
        console.log('Item table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return user;
};
