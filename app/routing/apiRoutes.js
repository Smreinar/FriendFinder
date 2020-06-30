const friendsData = require("../data/friends");


module.exports = function(app){

    //Get Route for all possible friends in json
    app.get("/api/friends",function(req, res){
        res.json(friendsData);
    })

    //Post Route used to handle incoming results also will contain the compatibility logic
    app.post("/api/friends", function(req, res){
        
    })


}