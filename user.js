var users = [  // Dummy data
    {
        id: 1,
        name: 'Brian',
        age: '21',
        gender: 'M'
    },
    {
        id: 2,
        name: 'Kim',
        age: '22',
        gender: 'M'
    },
    {
        id: 3,
        name: 'Joseph',
        age: '23',
        gender: 'M'
    },
    {
        id: 3,
        name: 'Faith',
        age: '23',
        gender: 'F'
    },
    {
        id: 5,
        name: 'Joy',
        age: '25',
        gender: 'F'
    }
];

const getUser = function (args) { // return a single user based on id
    var userID = args.id;
    return users.filter(user => {
        return user.id == userID;
    })[0];
}

const retrieveUsers = function (args) { // Return a list of users. Takes an optional gender parameter
    if (args.gender) {
        var gender = args.gender;
        return users.filter(user => user.gender === gender);
    } else {
        return users;
    }
}

const updateUser = function({id, name, age}) {  // Update a user and return new user details
    users.map(user => {
      if(user.id === id) {
        user.name = name;
        user.age = age;
        return user;
      }
    });
    return users.filter(user=> user.id === id) [0];
  }

module.exports = {
    getUser,
    retrieveUsers,
    updateUser
}
