import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        super();

        // To extend the built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}

// new RequestValidationError(errors);