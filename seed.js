var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = async function(data) {
  // your code here!
  //using async function
  //uding await for both stories and authors
  //try {}
  //await stories
  //awat Authors 
  //catch(err)
  //atterate over the data id,tittle, score
  

}
seedDb(data);
