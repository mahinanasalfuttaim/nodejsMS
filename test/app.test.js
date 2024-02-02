const sinon = require('sinon');
const User = require('../models/user');
const userController = require('../controllers/user');

// The test below uses the sinon.stub() method to create a stub for the User.find() method.
// The stub returns a promise that resolves to an array of mock users.
// The stub replaces the actual User.find() method in the test.
// The stub is restored after the test is run.
// The test checks if the res.json() method is called with the mock users.
//  The test fails if the res.json() method is not called with the mock users.
describe('User Controller', function() {
  describe('listUsers', ()=>{
    it('should send all users',  (done)=> {
      const mockUsers = [{name: 'John Doe', email: 'john@example.com', password: 'password'}];
      const res = {
        json: sinon.spy(),
        status: function() { return this; }
      };

      sinon.stub(User, 'find');
       User.find.returns(Promise.resolve(mockUsers));

      userController.listUsers(null, res).then(() => {
        expect(res.json.calledWith(mockUsers)).toBeTruthy();
        User.find.restore();
        done();
      });
    });
  });
});

describe('User Controller', function() {
  describe('getUserById', ()=>{
    it('should send the specified user',  (done)=> {
      const mockUser = {name: 'John Doe', email: 'ss@gmail.com', password: 'password'};
      const req = {params: {id: 1}};
      const res = {
        json: sinon.spy(),
        status: function() { return this; }
      }
      sinon.stub(User, 'findById');
      User.findById.returns(Promise.resolve(mockUser));
      userController.getUserById(req, res).then(() => {
        expect(res.json.calledWith(mockUser)).toBeTruthy();
        User.findById.restore();
        done();
      });
    }
    );
  }
  );
}
);

describe('User Controller', function() {
  describe('createUser', ()=>{
    it('should create a new user',  (done)=> {
      const req = {
        body: {
          name: 'John Doe',
          email: 'sss@fff.com',
          password: 'password'
        }
      };
      const res = {
        json: sinon.spy(),
        status: function() { return this; }
      };
      sinon.stub(User.prototype, 'save');
      User.prototype.save.returns(Promise.resolve());
      userController.createUser(req, res).then(() => {
        expect(res.json.calledOnce).toBeTruthy();
        User.prototype.save.restore();
        done();
      });
    }
    );

    // it('should throw an error if user is not created',  (done)=> {
    //   const req = {
    //     body: {
    //       name: 'John Doe',
    //       email: 'sss@fff.com',
    //       password: 'password'
    //     }
    //   };
    //   const res = {
    //     json: sinon.spy(),
    //     status: function() { return this; }
    //   };
    //   sinon.stub(User.prototype, 'save');
    //   User.prototype.save.returns(Promise.reject());
    //   userController.createUser(req, res).catch(() => {
    //     expect(res.status.calledWith(400)).toBeTruthy();
    //     User.prototype.save.restore();
    //     done();
    //   });
    // }
    // );
  }
  );
}
);

      

