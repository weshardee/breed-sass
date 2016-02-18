import {
    createCritter,
    compareCritters,
} from './critter';

const POP_SIZE = 50;
const debug = require('debug')('app:population');
const NUM_ELITE_CLONES = 2;


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
    // grab some elites to clone into the next population
    const newPop = pop.slice(0, NUM_ELITE_CLONES);

    // select mating pairs
    const unpicked = pop.slice();
    while (unpicked.length > 0) {
        const select = (percent) => pop.find()
        const critterA = removeByRoulette(unpicked);
        const critterB = removeByRoulette(unpicked);
        const pair = [ critterA, critterB ];
        debug('breeding pair selected', pair);
    }

    return newPop;
}

function removeByRoulette(pop) {
    // get the total score for roulette wheel mating
    const totalScore = pop.reduce((total, critter) => total + critter.score, 0);
    const spin = Math.random() * totalScore;

    let runningScore = 0;
    const i = pop.findIndex(critter => {
        runningScore += critter.score;
        return runningScore > spin;
    });

    return pop.splice(i, 1);
}
