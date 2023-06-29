import { Fun, Ev } from "./folder/function.js";

// Make sure that all the creates functions have an unique source,
// because v8 has a bytecode caching bug. Make this function return
// a constant value to see the effect of the bug.
const unique = () => Math.random();

const inlineFunction = Function(`${unique()};return import('./mod.js');`);
const { default: inlineFunctionRes } = await inlineFunction();
log(`Inline function loaded ${inlineFunctionRes}`);

const polyfilledFunction = Fun(`${unique()};return import('./mod.js');`);
const { default: polyfilledFunctionRes } = await polyfilledFunction();
log(`Polyfilled function loaded ${polyfilledFunctionRes}`);

const inlineIndirectEval = (0, eval)(`${unique()};import('./mod.js');`);
const { default: inlineIndirectEvalRes } = await inlineIndirectEval;
log(`Inline indirect eval loaded ${inlineIndirectEvalRes}`);

const polyfilledIndirectEval = Ev(`${unique()};import('./mod.js');`);
const { default: polyfilledIndirectEvalRes } = await polyfilledIndirectEval;
log(`Polyfilled indirect eval loaded ${polyfilledIndirectEvalRes}`);
