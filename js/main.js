import { Fun, Ev, runFromFolder } from "./folder/function.js";
import { unique } from "./unique.js";

const inlineFunction = Function(`${unique()};return import('./mod.js#1');`);
const { default: inlineFunctionRes } = await inlineFunction();
log(`Inline function loaded ${inlineFunctionRes}`);

const polyfilledFunction = Fun(`${unique()};return import('./mod.js#2');`);
const { default: polyfilledFunctionRes } = await polyfilledFunction();
log(`Polyfilled function loaded ${polyfilledFunctionRes}`);

const inlineIndirectEval = (0, eval)(`${unique()};import('./mod.js#3');`);
const { default: inlineIndirectEvalRes } = await inlineIndirectEval;
log(`Inline indirect eval loaded ${inlineIndirectEvalRes}`);

const polyfilledIndirectEval = Ev(`${unique()};import('./mod.js#4');`);
const { default: polyfilledIndirectEvalRes } = await polyfilledIndirectEval;
log(`Polyfilled indirect eval loaded ${polyfilledIndirectEvalRes}`);

await runFromFolder();
