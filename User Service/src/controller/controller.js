const users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;

  if (!name || !email)
    return res.status(404).json({ message: "Name or Email is empty" });

    res.cookie('id', id, { httpOnly: true, maxAge: 8 * 60 * 60 * 1000 });
  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json({ message: "Successfully added a user" });
};
