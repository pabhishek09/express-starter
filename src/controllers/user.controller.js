var UserController = {

  getAllUsers: async (req, res, next) => {
    try {
      res.send({ id: "007", name: 'James Bond' });
    } catch (err) {
      console.log('Error in find user', err);
      // Handle error TBD
    }
  }

};

// export default UserController;
module.exports = UserController;
