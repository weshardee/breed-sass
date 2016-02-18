import {
    createCritter,
    compareCritters,
} from './critter';

const POP_SIZE = 50;
const debug = require('debug')('app:population');

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
    pop.sort(compareCritters);
}

export function breed(pop) {
    const totalScore = pop.reduce((total, critter) => total + critter.score, 0);
    debug('population total', totalScore);
}
