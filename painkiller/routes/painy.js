var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('painkiller','user_db', ',,user332', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

sequelize.authenticate().then(function (err) {
  if (err) {
    console.error('Connection Error');
  } else {
    console.log('Successfully connected');
  }
});

var patients = sequelize.import('../database/models/patients');
var actions = sequelize.import('../database/models/actions');
var painkillers = sequelize.import('../database/models/painkillers');



//ALL USERS

router.get('/patients', function (req, res, next) {
  patients.findAll({attributes: ['idUser', 'firstName', 'lastName', 'room', 'age', 'createdAt', 'updatedAt']}).then(function (allPatients) {
    res.json({"Patients": allPatients});
  })
});

router.get('/patients/:patientid', function (req, res, next) {
  var getPatientID = req.params.patientid;
  patients.find({where: {idUser: getPatientID}}).then(function (selectedUser) {
    res.json({"Bewohner": selectedUser});
  })
});

router.delete('/patients/:deleteId', function (req, res, next) {
  var userID = req.params.deleteId;
  patients.destroy({where: {idUser: userID}});
  res.json({info: "deleted"});
});

router.post('/patients/new', function (req, res, next) {
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var room = req.body.room;
  var age = req.body.age;

  var newPatient = patients.build({
    firstName: firstName,
    lastName: lastName,
    room: room,
    age: age
  });

  newPatient.save().catch(function (error) {
    console.log('Error while inserting: ' + error.stack);
  });
  res.json({"info": "Neu angelegt"});
});

router.post('/action', function (req, res, next) {
  var idUser = req.body.iduser;
  var idPainkiller = req.body.idpainkiller;
  var type = req.body.type;
  var given = req.body.given;
  var registerTimeUnix = new Date().getTime();

  var newAction = actions.build({
    idUser: idUser,
    idPainkiller: idPainkiller,
    type: type,
    given: given,
    registerTimeUnix: registerTimeUnix
  });

  painkillers.findOne({where: {idPainkiller: idPainkiller}}).then(function (painkillerAction) {
            painkillerAction.stock -= 1;
            painkillerAction.updateAttributes({
              stock: painkillerAction.stock
            }).then(function(result) {
              res.json({"info": 'Updated stock'});
            });
          });

  newAction.save().catch(function (error) {
    console.log('Error while inserting: ' + error.stack);
  });
  res.json({"info": "Neue Aktion"});
});


router.get('/history/:userId', function (req, res, next) {
  var getUserId = req.params.userId;
  actions.findAll({ where: {idUser: getUserId}, order: [['registerTimeUnix', 'DESC']], attributes: ['idActions', 'idUser', 'idPainkiller', 'type', 'given', 'registerTimeUnix']}).then(function (selectedActions) {
    res.json({"History": selectedActions});
  })
});

module.exports = router;
