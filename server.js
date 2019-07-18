const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

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


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/api/students', students);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}!`));