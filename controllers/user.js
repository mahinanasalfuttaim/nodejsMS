
const User = require('../models/user');

//write a function to get user data from the database
exports.listUsers = async (req, res)=> {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
  };

//write a function to get user data by id from the database
  exports.getUserById = async(req, res) => {
      User.findById({_id: req.params.id})
          .then(user => res.json(user))
          .catch(err => res.status(400).json('Error: ' + err));
    }; 

//write a function to add user data to the database
exports.createUser = async(req, res)=> {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
  };

//write a function to delete user data from the database
exports.deleteUser = (req, res)=> {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
  };

//write a function to update user data in the database
exports.updateUser = (req, res)=> {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
};

