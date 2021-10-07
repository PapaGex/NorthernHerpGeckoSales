import { CustomError } from "./custom-error";

export class FourZeroFour extends CustomError {
    statusCode = 404;

    constructor() {
        super('Chewy Route NO Pa CHompa No Chewy 404');

        Object.setPrototypeOf(this, FourZeroFour.prototype);
    }

    serializeErrors() {
        return [{ message: 'No Find Pa Chewy' }];
    }
}

