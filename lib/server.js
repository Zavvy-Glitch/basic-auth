'use strict';

const express = require('express');
const app = express();
const cors = require('cors')
const { UserModel } = require('../model')

const bcrypt = require('bcrypt');
const base64 = require('base-64');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/here', async (req, res) => {
  res.send('Made It')
})

app.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UserModel.create(req.body);
    res.status(200).json(record);
  } catch (e) {
    res.status(403).send("Error Creating User"); }
});

app.post('/signin', async (req, res) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');
  try {
    const user = await UserModel.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User')
    }
  } catch (error) { res.status(403).send("Invalid Login"); }

})

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('server up')
    })
  }
};