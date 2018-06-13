var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nhapp','user_db', ',,user332', {
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

var user = sequelize.import('../database/models/user');
var room = sequelize.import('../database/models/room');
var useraction = sequelize.import('../database/models/useraction');


//ALL USERS

router.get('/users', function (req, res, next) {
  user.findAll({attributes: ['idUser', 'firstName', 'lastName', 'nickName', 'password', 'score', 'createdAt', 'updatedAt']}).then(function (allUsers) {
    res.json({"users": allUsers});
  })
});



router.get('/useractions', function (req, res, next) {
  useraction.findAll({attributes: ['idUserActions', 'idRooms', 'idUser', 'isLight', 'isHeating', 'isBeamer', 'isComputer', 'isWindow', 'points', 'registerTimeUnix', 'createdAt', 'updatedAt']}).then(function (allActions) {
    res.json({"actions": allActions});
  })
});

router.get('/useractions/:userid', function (req, res, next) {
  var getUserID = req.params.userid;
  useraction.findAll({where: {idUser: getUserID}}).then(function (allActions) {
    res.json({"actions": allActions});
  })
});
//----------------------------------------------
//SINGLE USERS

router.get('/user/:userid', function (req, res, next) {
  var getUserID = req.params.userid;
  user.find({where: {idUser: getUserID}}).then(function (selectedUser) {
    res.json({"user": selectedUser});
  })
});



router.delete('/users/:deleteId', function (req, res, next) {
  var userID = req.params.deleteId;
  user.destroy({where: {idUser: userID}});
  res.json({info: "deleted"});
});

router.post('/user/new', function (req, res, next) {
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var nickName = req.body.nickname;
  var password = req.body.password;
  var score = 0;

  var newUser = user.build({
    firstName: firstName,
    lastName: lastName,
    nickName: nickName,
    password: password,
    score: score
  });

  newUser.save().catch(function (error) {
    console.log('Error while inserting: ' + error.stack);
  });
  res.json({"info": "Neu angelegt"});
});


// USER ACTION ----------------------------------------------

router.post('/useraction/new', function (req, res, next) {

    var d = new Date().getTime();
    d -= 1800000;

    var lightState = req.body.lightState;
    var heatingState = req.body.heatingState;
    var windowState = req.body.windowState;
    var computerState = req.body.computerState;
    var beamerState = req.body.beamerState;
    var idUser = req.body.idUser;
    var idRooms = req.body.idRooms;


    var points = 0;

    const light = 5;
    const heating = 5;
    const window = 5;
    const computer = 5;
    const beamer = 5;

    const Op = Sequelize.Op;

    useraction.findAll({
      where: {idRooms: idRooms, registerTimeUnix: {[Op.gte]: d}}, //finde alle Räume, in denen in den letzten 30 Min was gemacht wurde
      attributes: ['idUserActions', 'idRooms', 'idUser', 'isLight', 'isHeating', 'isComputer', 'isBeamer', 'isWindow']}).then(function (useractions) {
        for(var i = 0; i < useractions.length; i += 1) {
          if(useractions[i].dataValues.isLight === 1) lightState = 0;
          if(useractions[i].dataValues.isHeating === 1) heatingState = 0;
          if(useractions[i].dataValues.isWindow === 1) windowState = 0;
          if(useractions[i].dataValues.isComputer === 1) computerState = 0;
          if(useractions[i].dataValues.isBeamer === 1) beamerState = 0
        }


        lightState === 1 ? points += light : points += 0;
        heatingState === 1 ? points += heating : points += 0;
        windowState === 1 ? points += window : points += 0;
        computerState === 1 ? points += computer : points += 0;
        beamerState === 1 ? points += beamer : points += 0;


        user.findOne({where: {idUser: idUser}}).then(function (user) {
          user.score += points;
          user.updateAttributes({
            score: user.score
          }).then(function(result) {
            //res.json({"info": 'Updated Score'});
          });
        });


        var dt = new Date().getTime();
        var newUserAction = useraction.build({
          idRooms: idRooms,
          idUser: idUser,
          isLight: lightState,
          isHeating: heatingState,
          isComputer: computerState,
          isWindow: windowState,
          isBeamer: beamerState,
          points: points,
          registerTimeUnix: dt
        });

        newUserAction.save().catch(function (error) {
          console.log('Error while inserting: ' + error.stack);
        });
        res.json({"info": "Neu angelegt"});

      })
    });


    //----------------------------------------------
    //ALL ROOMS

    router.get('/rooms', function (req, res, next) {
      room.findAll({attributes: ['idRooms', 'name', 'tag', 'isLight', 'isHeating', 'isComputer', 'isBeamer']}).then(function (allRooms) {
        res.json({"rooms": allRooms});
      })
    });


    //----------------------------------------------
    //SINGLE ROOM

    router.get('/room/:roomid', function (req, res, next) {
      var getRoomID = req.params.roomid;
      room.find({where: {idRooms: getRoomID}}).then(function (selectedRoom) {
        res.json({"room": selectedRoom});
      })
    });

    router.get('/tag/:tagid', function (req, res, next) {
      var getTagID = req.params.tagid;
      room.find({where: {tag: getTagID}}).then(function (selectedTag) {
        res.json({"room": selectedTag});
      })
    });



module.exports = router;
