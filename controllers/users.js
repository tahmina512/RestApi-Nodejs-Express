import { v4 as uuidv4 } from 'uuid';
//users array deleted needs to be initialize with let variable
let users = [
]
export const createUser = (req, res) => {
    const user = req.body;
    const uniqueId = uuidv4();
    const userWithId = { ...user, id: uniqueId };
    users.push(userWithId);
    // can do it short
    //users.push({...user,id: uuidv4()})
    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    res.send(users);
}

export const getUserById = (req, res) => {
    const { id } = (req.params);
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = (req.params);
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id == id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the id ${id} has been updated`);
}