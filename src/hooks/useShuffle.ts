const useShuffle = (array: Array<any>) => {
  const shuffledArray = array.sort((a: any, b: any) => 0.5 - Math.random());
  shuffledArray.map((item, index) => {
    return { ...item, number: index };
  });
  return { shuffledArray };
};

export default useShuffle;
