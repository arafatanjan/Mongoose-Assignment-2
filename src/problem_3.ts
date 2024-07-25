function reversedArr<T>(...a: T[]): T[] {
    return a.reverse();
  }

  const reversedArray = reversedArr("a", "b", "c", "d");

  console.log(reversedArray);