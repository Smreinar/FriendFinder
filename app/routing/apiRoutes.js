const friendsData = require("../data/friends");


module.exports = function(app){

    //Get Route for all possible friends in json
    app.get("/api/friends",function(req, res){
        res.json(friendsData);
    })

    //Post Route used to handle incoming results also will contain the compatibility logic
    app.post("/api/friends", function(req, res){
        
        //Grab the values with req.body and set them in a new friend object
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        }
        //declare an empty array to store the scores array 
        var scoresArray = [];

        //use a for loop to loop for each question and push each score to the empty array
        for(var i = 0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]))
        }

        //set the scores in the newFriend object to equal the value of the scoresArray
        newFriend.scores = scoresArray;

        //Declare an empty array to store the score comparisions 
        var scoreComparisionArray = [];
        
        //use a for loop to go through each person in the database
        for(var i = 0; i < friendsData.length; i++){
            
            //declare a number to store the comparision number
            var currentComparision = 0;

            //use a for loop to go through the newFriend.scores
            for(var j = 0; j < newFriend.scores.length; j++){
                /*Grab the absolute value of the newFriend.scores and each person in the database 'friendsData'
                 and setting the new value to 'currentComparision' */
                currentComparision += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);

            }
            //push each score comparision to the scoreComparisionArray
            scoreComparisionArray.push(currentComparision);
        }
        //Declare a number as 'bestMatchPosition' to store the best score match
        var bestMatchPosition = 0;

        //use a for loop to go through the 'scoreComparisionArray' 
        for(var i = 1; i < scoreComparisionArray.length; i++){

            //the lower the number the better the match is
            if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
                bestMatchPosition = i;

            }

        }
        
        //declaring your bestmatch
        var bestFreindMatch = friendsData[bestMatchPosition];

        // using res.json() placing our new bestFreindMatch in it
        res.json(bestFreindMatch);

        // pushing the newFriend to friendsData to store in the database
        friendsData.push(newFriend)

    })


}