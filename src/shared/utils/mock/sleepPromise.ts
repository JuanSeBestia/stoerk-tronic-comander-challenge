function sleepPromise(millisecond: number = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
}

export default sleepPromise;
