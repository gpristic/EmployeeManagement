const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.office;
    }
}

module.exports = Manager