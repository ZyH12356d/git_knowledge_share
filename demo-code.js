// Demo JavaScript file for git conflict practice

class UserManager {
    constructor() {
        this.users = [];
        this.version = '1.0.1';
    }

    addUser(name, email) {
        const user = {
            id: this.users.length + 1,
            name: name,
            email: email,
            createdAt: new Date()
        };
        this.users.push(user);
        return user;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    getAllUsers() {
        return this.users;
    }
}

module.exports = UserManager;
