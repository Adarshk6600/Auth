const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;
const fs = require('fs');
const { log } = require('console');

const router = express.Router();

app.use(express.urlencoded({extended:false}))

app.get('/users', (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user["first_name"]}</li>`).join('')}
  </ul>
  `;
  return res.send(html);
});

app.get('/api/users/:id',(req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.send(user);
  })
// Define a route for handling multiple HTTP methods
router
  .route('/api/users/').post((req, res) => {
    const body = req.body;
    console.log(body);
    users.push({id:users.length +1, ...body})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {

      return res.json({ status: 'pending' });

    })
  })
  .patch((req, res) => {
    return res.json({ status: 'pending' });
  })
  .delete((req, res) => {
    return res.json({ status: 'pending' });
  });

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
