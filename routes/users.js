import express from 'express';

const router = express.Router();

const users = [
  {
    firstname: 'Kostantinos',
    lastname: 'Kaplanis',
    age: 25,
  },
  {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 23,
  },
];

// All routes in here are starting with /users
router.get('/', (req, res) => {
  console.log(users);

  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(`User with the name ${user.firstname} added to the database`);
});

export default router;
