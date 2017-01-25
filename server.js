let express = require('express');

//Create our app
let app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next ) {
    if (req.heders['x-forwarded-proto'] === 'http') {
        next();
    }else {
       res.redirect('http://' + req.hostname + req.url); 
        
    }
    
});

app.use(express.static('public'));

app.listen(port, function() {
    console.log('express server is up on port ' + port)
});
