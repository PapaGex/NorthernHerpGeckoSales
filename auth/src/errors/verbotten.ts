import { CustomError } from "./custom-error";

export class Verbotten extends CustomError {
    statusCode = 401;

    constructor() {
        super( 'You Shall Not Pass!!!! the way is blocked, YOU SHALL NOT PASS! 401 The dark fire will not avail you hear. FLAME of UDUNE!' );

        Object.setPrototypeOf(this, Verbotten.prototype);
    }

    serializeErrors() {
        return [{ message: 'You Shall Not Pass!!!! the way is blocked, YOU SHALL NOT PASS! 401 The dark fire will not avail you hear. FLAME of UDUNE!' }];
    }
}