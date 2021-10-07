import { CustomError } from "./custom-error";

export class  DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'DB PaChewy chewy bumpa Chomp DB';

    constructor() {
        super('Cha BompBa DB Chewy Chom Pa CHomp');

        // To extend the built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {message: this.reason,},];
    }
}