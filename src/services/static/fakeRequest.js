export const fakeRequest = (data, isResolve) => {
  const minTimeResolve = 100;
  const maxTimeResolve = 500;

  const resolveTime = Math.floor(Math.random() * (maxTimeResolve - minTimeResolve + 1) + minTimeResolve);
  return new Promise((resolve, reject) => {
    setTimeout(() => isResolve ? resolve(data) : reject(data), resolveTime);
  });
}