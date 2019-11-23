var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
});
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // var newCharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(req.body);
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: []
    };

    newFriend.scores.push(parseInt(req.body.question1));
    newFriend.scores.push(parseInt(req.body.question2));
    newFriend.scores.push(parseInt(req.body.question3));
    newFriend.scores.push(parseInt(req.body.question4));
    newFriend.scores.push(parseInt(req.body.question5));
    newFriend.scores.push(parseInt(req.body.question6));
    newFriend.scores.push(parseInt(req.body.question7));
    newFriend.scores.push(parseInt(req.body.question8));
    newFriend.scores.push(parseInt(req.body.question9));
    newFriend.scores.push(parseInt(req.body.question10));

   let friendFinder= findNewFriend(friends, newFriend);

    friends.push(newFriend);

    res.json(friendFinder);
});
function findNewFriend(friends, newFriend) {
    let minScore=null;
    let bestFriend = null;
    for (let i = 0; i < friends.length; i++) {
        let score = getScore(friends[i], newFriend);
        if( minScore===null || minScore>score ){
            minScore = score;
            bestFriend = friends[i];
        }
    }
return bestFriend;
}
function getScore(friend, newFriend) {
    let score = 0;
    for (let i = 0; i < friend.scores.length; i++) {
        score += Math.abs(friend.scores[i] - newFriend.scores[i]);
    }
    return score;
}
  
}