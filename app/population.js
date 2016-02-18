import sass from 'node-sass';

const CRITTER_SIZE = 50;
const CHARS = ' abcdefghijklmnopqrstuvwxyz0123456789:/{}.#@-'
const NUM_CHARS = CHARS.length;
const POP_SIZE = 50;

const debug = require('debug')('app:population');

export function createCritter() {
    let gene = '';

    for (let i = 0; i < CRITTER_SIZE; i++) {
        gene += CHARS.charAt(Math.floor(Math.random() * NUM_CHARS));
    }

    const score = scoreGenome(gene);

    return { gene, score };
}

export function evaluateFitness(critter) {

}

export function createPopulation() {
    let population = [];
    for (let i = 0; i < POP_SIZE; i++) {
        population.push(createCritter());
    }
    sortPopulation(population);
    debug('population created', population);

    return population;
}

export function sortPopulation(pop) {
    pop.sort(compare);
}

export function compare(a, b) {
    return a.score - b.score;
}

export function scoreGenome(data) {
    try {
        return sass.renderSync({ data });
    } catch(e) {
        return 0;
    }
}
