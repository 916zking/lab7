var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', projects);
  	projects["grid"] = false;


  	/*$(".btn btn-default likeBtn").click( function(e) {
		ga("send", "event", 'like', 'click');
	});
*/

};

exports.viewGrid = function(req, res){
  	res.render('index', projects);
  	projects["grid"] = true;


  	/*$(".likeBtn").click( function(e) {
		ga("send", "event", 'like', 'click');
	});
*/

};



