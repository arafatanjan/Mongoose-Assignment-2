function program(word: string, numb: number = 3): void {
    let result = '';
    for (let i = 0; i < numb; i++) {
        result += word;
        result += '\n';
      }
      console.log(result);
}
program("String", 5);