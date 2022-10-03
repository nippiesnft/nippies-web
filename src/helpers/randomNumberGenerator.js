export const getRandomOffset = () => {
    const number = Math.floor(Math.random() * 2) + 2;
    const sign = Math.floor(Math.random() * 2);

    return sign === 0 ? number : (number*-1)
}

export const addOffsetsToNippies = (nippies) => {
    return nippies.map((nippie) => ({
      ...nippie,
      offset: getRandomOffset(),
    }));
  }