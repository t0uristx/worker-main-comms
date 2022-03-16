// worker APIs:
// - worker.postMessage
// - worker.onmessage

function connect() {
  // @TODO: Implement the features here
}

(async function init() {
  const worker = connect(new Worker("./worker.js"));

  try {
    const additionResult = await worker.add(1, 2);

    console.log({ additionResult }); // Should log 3

    await worker.subtract(1, 2); // This should throw an error
  } catch (error) {
    console.error(error); // Should throw an error that this operation is not supported
  }
})();
