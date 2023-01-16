export class Kenken {
    constructor(gridSize) {
        this.solution = this.generateSolution(gridSize);

        console.log(this.solution);
    }

    generatePieces(gridSize) {
        let pieces = [];

        return pieces;
    }

    generateSolution(gridSize) {
        let solution = Array.from(Array(gridSize), () => new Array(gridSize));

        

        return solution;
    }

    getGrid() {

    }

}