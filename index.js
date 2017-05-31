const express = require('express');
const app = express();
const router = express.Router();

const fs = require('fs');
const bodyParser = require('body-parser');

const db = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

app.use('/api', router);

router.route('/bears')
  .post((req, res) => {
    db.push(req.body.bear);
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if (err) throw err;
      res.send('The bear name has been saved');
    });
  })
  .get((req, res) => {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  });

router.route('/bears/:id')
  .put((req, res) => {
    const newBear = req.body.bear;
    db.forEach((bear, index) => {
      if(bear.id === req.params.id) {
        db.splice(index, 1, newBear)
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if(err) throw err;
      res.send('The bear has been modified');
    });
  })
  .delete((req, res) => {
    db.forEach((bear, index) => {
      if(bear.id === req.params.id) {
        db.splice(index, 1);
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if (err) throw err;
      res.send('The bear has been deleted');
    });
  })

app.listen(PORT, () => {
  console.log('Example app listening on port ', PORT);
});
