import {
    createCritter,
    compareCritters,
    mate,
} from './critter';

const POP_SIZE = 50;
const debug = require('debug')('app:population');
const NUM_ELITE_CLONES = 2;

export function createPopulation() {
    let population = [];
    for (let i = 0; i < POP_SIZE; i++) {
        population.push(createCritter());
    }
    population.sort(compareCritters);
    debug('population created', population);

    return population;
}

export function breed(pop) {
    // grab some elites to clone into the next population
    let newPop = pop.slice(0, NUM_ELITE_CLONES);

    // select mating pairs
    const unpicked = pop.slice();
    while (unpicked.length > 0) {
        const select = (percent) => pop.find()
        const geneA = removeByRoulette(unpicked).gene;
        const geneB = removeByRoulette(unpicked).gene;
        debug('breeding pair selected', [ geneA, geneB ]);
        const children = mate(geneA, geneB);

        newPop = newPop.concat(children);
    }

    // sort population by fitness
    newPop.sort(compareCritters);

    // cull population to compensate for clones
    newPop.slice(0, POP_SIZE);

    debug('population bred', newPop);
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

    return pop.splice(i, 1)[0];
}
