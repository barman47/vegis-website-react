const express = require('express');
const mongoose = require('mongoose');
const secure = require('express-force-https');
const path = require('path');

const accountSid = 'AC1c74fb39361ac85eb11c8a91e187221f';
const authToken = 'baa8b1d6eaed60bd0b79f41e4ffc8665';
const client = require('twilio')(accountSid, authToken);

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
  client.messages
    .create({
       body: 'This is a test message from vegistech.com.',
       from: '+12055513500',
       to: ['+2349026425337', '+2348130327095', '+2348162201403']
     })
    .then(message => res.send(message.sid + ' Message sent'))
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Server running on port ${port}!`));