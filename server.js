const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const criminalController = require('./controllers/jailbird.js')
app.use('/jailbirds', criminalController)

app.listen(3001, () => {
  console.log('listening');
})


//...farther down the page
mongoose.connect('mongodb://localhost:27017/jailbirds', { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
