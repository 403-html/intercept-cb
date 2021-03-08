import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = new Router();

const isUser = (user, id) => {
  return user.id === id;
};

let users = [
  {
    id: "52ff5e34-1031-4edc-a792-0d28c65b425e",
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    id: "993b43d8-2cf8-479e-973b-fa09c53f9940",
    firstName: "Marie",
    lastName: "Hump",
    age: 32,
  },
  {
    id: "1bacedeb-bc00-4045-ba0a-789238eda7d8",
    firstName: "Adelle",
    lastName: "Modelle",
    age: 19,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => isUser(user, id));

  res.send(foundUser);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  users.push({ id: userId, ...user });

  res.send({ message: `User ${user.firstName} added` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send({ message: `User with ID: ${id} has been deleted` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send({ message: `User with ID: ${id} has been updated` });
});

export default router;
