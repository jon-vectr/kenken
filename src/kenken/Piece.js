import { Operation } from "./Operation";

export class Piece {
    constructor(operation, target) {
        this.operation = Operation[operation];
        this.target = target;
    }

    toString() {
        return `${this.target}${this.operation}`
    }
}