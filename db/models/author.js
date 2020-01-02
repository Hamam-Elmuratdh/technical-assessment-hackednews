var express = require('express');
// var storyController = require('db/models/controllors/story.js');
var Author = require('/../../db/models/author.js');
var router = express.Router();
router.route('/')
  .get(async function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
     //using async function 
     // the data requird retreving = find all 
     //response .JSON (data) 

     let data = await findAll()
     try {
     req.JSON(data)}
     catch(err){
       res.status(500).JSON({err:"please try again later"})
     }
    
     
     
     
  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

module.exports = router;
