const user = require('../models').Users
const bcrypt = require('bcrypt')

const FindAllUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const FindUserById = async (req, res) => {
    try {
        const users = await user.findOne({
            where : {
                id : req.params.id
            }
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const CreateUser = async (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

   try {
       await user.create({
           name: req.body.name,
           email: req.body.email,
           password: hash,
           createdAt: new Date(),
           updateAt: new Date()
       })
       res.status(201).json({message : "Register Success !"})
   }
    catch (error) {
       res.status(400).json({ message: error.message + ', email already exist!' });
   }
}

const UpdateUser = async (req, res) => {
    try {
        await user.update({
            name: req.body.name,
            email: req.body.email,
            updateAt: new Date()
        },
        {
            where : {
                id : req.params.id
            }
        })
        
        res.status(201).json({ message: "Profile Updated !" })
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const DeleteUser = async (req, res) => {
    try {
        await user.destroy({
            where : {
                id : req.params.id
            }
        })
        res.status(201).json({ message: "User Deleted !" })
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports = { FindAllUsers, FindUserById, CreateUser, UpdateUser, DeleteUser };