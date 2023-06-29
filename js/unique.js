// Make sure that all the creates functions have an unique source,
// because v8 has a bytecode caching bug. Make this function return
// a constant value to see the effect of the bug.
export const unique = () => Math.random();
