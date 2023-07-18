// Create web server with express
// Run with: node comments.js
// Access with: http://localhost:3000/comments
// Access with: http://localhost:3000/comments?postId=1

// Import modules
var express = require('express');
var app = express();

// Create route for /comments
app.get('/comments', function(req, res) {
    // Read query string
    var postId = req.query.postId;
    console.log('Query string: ' + postId);

    // Create response
    var response = 'Comments for post ' + postId;

    // Send response
    res.send(response);
});

// Start server
app.listen(3000);
console.log('Server listening on port 3000');