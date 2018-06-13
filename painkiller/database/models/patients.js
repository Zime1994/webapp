
module.exports = function (sequelize, DataTypes) {
    const patients = sequelize.define("patients", {
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
        room: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },{
        freezeTableName: true,
        tableName: 'patients',
        timestamps: true
    });

    patients.sync().then(function() {
        console.log('Item table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return patients;
};
