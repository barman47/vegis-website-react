const express = require('express');
const mongoose = require('mongoose');
const secure = require('express-force-https');
const path = require('path');
const request = require('request-json');
const url = require('url');

var TILL_URL = url.parse('https://platform.tillmobile.com/api/send?username=10d170f9197e4d66af762fe61b2c18&api_key=cf41958ebe8a3e99cde3353c3616d90895bb23cb');

var TILL_BASE = TILL_URL.protocol + '//' + TILL_URL.host;
var TILL_PATH = TILL_URL.pathname;

if(TILL_URL.query != null) {
    TILL_PATH += "?"+TILL_URL.query;
}

var client = request.createClient(TILL_BASE);

const app = express();

const students = require('./routes/api/students');

const { mongoURI } = require('./config/keys');
const port = process.env.PORT || 5000;

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log(err));

    
app.use(secure);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/api/students', students);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('/sendMessage', (req, res) => {      
    var data = {
        "phone": '09026425337',
        "questions" : [{
          "text": "Rgeistartion successful",
          "tag": "VEGISTECH",
          "responses": ["Red", "Green", "Yellow"],
          "webhook": req.body.webhook_url + "?uuid="+req.body.uuid
        }],
        conclusion: 'Thanks for registering'
      };
    
      client.post(TILL_PATH, data, function(err, res, body) {
        return console.log(res.statusCode);
      });  
    
      res.send(res);

});

app.listen(port, () => console.log(`Server running on port ${port}!`));