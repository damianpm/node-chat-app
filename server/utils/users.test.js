const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'jose',
        room: 'room1'
      }, {
        id: '2',
        name: 'pepe',
        room: 'room2'
      }, {
        id: '3',
        name: 'chepe',
        room: 'room1'
      }
    ]
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Pepe',
      room: 'Pepe"s room'
    };
    const res = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', ()=>{
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', ()=>{
    var userId = '111';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', ()=>{
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', ()=>{
    var userId = '4';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names list by room', () => {
    var room1 = users.getUserList('room1');
    expect(room1).toEqual(['jose', 'chepe']);

    var room2 = users.getUserList('room2');
    expect(room2).toEqual(['pepe']);
    expect(room2.length).toBe(1);
  });

});
