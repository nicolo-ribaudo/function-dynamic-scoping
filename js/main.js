import {
  FunctionW,
  evalW,
  setTimeoutW,
  FunctionB,
  evalB,
  setTimeoutB,
  runFromFolder,
} from "./folder/function.js";

const inlineFunction = Function(`return import('./mod.js#1.1');`);
const { default: inlineFunctionRes } = await inlineFunction();
log(`Inline function loaded ${inlineFunctionRes}`);

const wrappedFunction = FunctionW(`return import('./mod.js#1.2');`);
const { default: wrappedFunctionRes } = await wrappedFunction();
log(`Wrapped function loaded ${wrappedFunctionRes}`);

const boundFunction = FunctionB(`return import('./mod.js#1.3');`);
const { default: boundFunctionRes } = await boundFunction();
log(`Bound function loaded ${boundFunctionRes}`);

const thenFunction = await Promise.resolve(`return import('./mod.js#1.4');`).then(Function)
const { default: thenFunctionRes } = await thenFunction();
log(`Then function loaded ${thenFunctionRes}`);

log("-".repeat(80));

const inlineIndirectEval = (0, eval)(`import('./mod.js#2.1');`);
const { default: inlineIndirectEvalRes } = await inlineIndirectEval;
log(`Inline indirect eval loaded ${inlineIndirectEvalRes}`);

const wrappedIndirectEval = evalW(`import('./mod.js#2.2');`);
const { default: wrappedIndirectEvalRes } = await wrappedIndirectEval;
log(`Wrapped indirect eval loaded ${wrappedIndirectEvalRes}`);

const boundIndirectEval = evalB(`import('./mod.js#2.3');`);
const { default: boundIndirectEvalRes } = await boundIndirectEval;
log(`Bound indirect eval loaded ${boundIndirectEvalRes}`);

const thenIndirectEval = await Promise.resolve(`import('./mod.js#2.4');`).then(eval);
const { default: thenIndirectEvalRes } = await thenIndirectEval;
log(`Then indirect eval loaded ${thenIndirectEvalRes}`);


log("-".repeat(80));

await runFromFolder();

log("-".repeat(80));

const inlineSetTimeout = new Promise((resolve) => {
  setTimeout(`setTimeoutCallback(import('./mod.js#3.1'));`, 0);
  globalThis.setTimeoutCallback = resolve;
});
const { default: inlineSetTimeoutRes } = await inlineSetTimeout;
log(`Inline setTimeout loaded ${inlineSetTimeoutRes}`);

const wrappedSetTimeout = new Promise((resolve) => {
  setTimeoutW(`setTimeoutCallback(import('./mod.js#3.2'));`, 0);
  globalThis.setTimeoutCallback = resolve;
});
const { default: wrappedSetTimeoutRes } = await wrappedSetTimeout;
log(`Wrapped setTimeout loaded ${wrappedSetTimeoutRes}`);

const bondSetTimeout = new Promise((resolve) => {
  setTimeoutB(`setTimeoutCallback(import('./mod.js#3.3'));`, 0);
  globalThis.setTimeoutCallback = resolve;
});
const { default: bondSetTimeoutRes } = await bondSetTimeout;
log(`Bound setTimeout loaded ${bondSetTimeoutRes}`);

const thenSetTimeout = new Promise(async (resolve) => {
  Promise.resolve(`setTimeoutCallback(import('./mod.js#3.4'));`).then(setTimeout);
  globalThis.setTimeoutCallback = resolve;
});
const { default: thenSetTimeoutRes } = await thenSetTimeout;
log(`Then setTimeout loaded ${thenSetTimeoutRes}`);
