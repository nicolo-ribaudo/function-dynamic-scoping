import { unique } from "../unique.js";

export const FunctionW = (...args) => Function(...args);
export const evalW = str => (0, eval)(str);
export const setTimeoutW = (...args) => setTimeout(...args);

export const FunctionB = Function.bind();
export const evalB = eval.bind();
export const setTimeoutB = setTimeout.bind();

export async function runFromFolder() {
  const inlineFunction = Function(`return import('./mod.js#10');`);
  const { default: inlineFunctionRes } = await inlineFunction();
  log(`Inline function in folder/ loaded ${inlineFunctionRes}`);

  const inlineIndirectEval = (0, eval)(`import('./mod.js#11');`);
  const { default: inlineIndirectEvalRes } = await inlineIndirectEval;
  log(`Inline indirect eval in folder/ loaded ${inlineIndirectEvalRes}`);
}
