const CRITTER_SIZE = 50;
const CHARS = ' abcdefghijklmnopqrstuvwxyz0123456789:/{}.#@-'
const NUM_CHARS = CHARS.length;
const POP_SIZE = 50;

export function createCritter() {
    let critter = '';

    for (let i = 0; i < CRITTER_SIZE; i++) {
        critter += CHARS.charAt(Math.floor(Math.random() * NUM_CHARS));
    }
    return critter;
}

export function evaluateFitness(critter) {

}

export function createPopulation() {
    let population = [];
    for (let i = 0; i < POP_SIZE; i++) {
        population.push(createCritter());
    }
    return population;
}

export function sortPopulation(pop) {

}
