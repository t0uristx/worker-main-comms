function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function exposeWorkerMethods() {
  // @TODO: Implement the features here
}

exposeWorkerMethods({
  add,
  multiply
});
