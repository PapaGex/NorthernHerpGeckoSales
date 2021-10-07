export class  DatabaseConnectionError extends Error {
    reason = 'DB PaChewy chewy bumpa Chomp DB';
    constructor() {
        super();

        // To extend the built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}