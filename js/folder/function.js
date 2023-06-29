import { unique } from "../unique.js";

export const Fun = (...args) => Function(...args);
export const Ev = str => (0, eval)(str);

export async function runFromFolder() {
  const inlineFunction = Function(`${unique()};return import('./mod.js');`);
  const { default: inlineFunctionRes } = await inlineFunction();
  log(`Inline function in folder/ loaded ${inlineFunctionRes}`);

  const inlineIndirectEval = (0, eval)(`${unique()};import('./mod.js');`);
  const { default: inlineIndirectEvalRes } = await inlineIndirectEval;
  log(`Inline indirect eval in folder/ loaded ${inlineIndirectEvalRes}`);
}
