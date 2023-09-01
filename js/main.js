import {
  FunctionW,
  evalW,
  setTimeoutW,
  FunctionB,
  evalB,
  setTimeoutB,
  runFromFolder,
} from "./folder/function.js";

const inlineFunction = Function(`return import('./mod.js#1');`);
const { default: inlineFunctionRes } = await inlineFunction();
log(`Inline function loaded ${inlineFunctionRes}`);

const wrappedFunction = FunctionW(`return import('./mod.js#2');`);
const { default: wrappedFunctionRes } = await wrappedFunction();
log(`Wrapped function loaded ${wrappedFunctionRes}`);

const boundFunction = FunctionB(`return import('./mod.js#3');`);
const { default: boundFunctionRes } = await boundFunction();
log(`Bound function loaded ${boundFunctionRes}`);

log("-".repeat(80));

const inlineIndirectEval = (0, eval)(`import('./mod.js#4');`);
const { default: inlineIndirectEvalRes } = await inlineIndirectEval;
log(`Inline indirect eval loaded ${inlineIndirectEvalRes}`);

const wrappedIndirectEval = evalW(`import('./mod.js#5');`);
const { default: wrappedIndirectEvalRes } = await wrappedIndirectEval;
log(`Wrapped indirect eval loaded ${wrappedIndirectEvalRes}`);

const boundIndirectEval = evalB(`import('./mod.js#6');`);
const { default: boundIndirectEvalRes } = await boundIndirectEval;
log(`Bound indirect eval loaded ${boundIndirectEvalRes}`);


log("-".repeat(80));

await runFromFolder();

log("-".repeat(80));

const inlineSetTimeout = new Promise((resolve) => {
  setTimeout(`setTimeoutCallback(import('./mod.js#7'));`, 0);
  globalThis.setTimeoutCallback = resolve;
});
const { default: inlineSetTimeoutRes } = await inlineSetTimeout;
log(`Inline setTimeout loaded ${inlineSetTimeoutRes}`);

const wrappedSetTimeout = new Promise((resolve) => {
  setTimeoutW(`setTimeoutCallback(import('./mod.js#8'));`, 0);
  globalThis.setTimeoutCallback = resolve;
});
const { default: wrappedSetTimeoutRes } = await wrappedSetTimeout;
log(`Wrapped setTimeout loaded ${wrappedSetTimeoutRes}`);

const bondSetTimeout = new Promise((resolve) => {
  setTimeoutB(`setTimeoutCallback(import('./mod.js#9'));`, 0);
  globalThis.setTimeoutCallback = resolve;
});
const { default: bondSetTimeoutRes } = await bondSetTimeout;
log(`Bound setTimeout loaded ${bondSetTimeoutRes}`);
