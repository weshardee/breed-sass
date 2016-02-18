import sass from 'node-sass';

const CRITTER_SIZE = 50;
const CHARS = ' abcdefghijklmnopqrstuvwxyz0123456789:/{}.#@-'
const NUM_CHARS = CHARS.length;
const POP_SIZE = 50;

const debug = require('debug')('app:population');

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
    sortPopulation(population);
    debug('population created', logPopulation(population));

    return population;
}

export function sortPopulation(pop) {
    pop.sort(compare);
}

export function logPopulation(pop) {
    return pop.map(critter => ({
        score: scoreCritter(critter),
        gene: critter,
    }));
}

export function compare(a, b) {
    return scoreCritter(a) - scoreCritter(b);
}

export function scoreCritter(critter) {
    try {
        return sass.renderSync({
            data: critter,
        });
    } catch(e) {
        return 0;
    }
}
