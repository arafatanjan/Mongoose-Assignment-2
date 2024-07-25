interface Properties {
    name: string;
    age: number;
  }

  function result(person: Properties[]): Properties[] {
    return people.filter(person => person.age >= 18);
  }
  
  
  const people: Properties[] = [
    { name: "a", age: 18 },
    { name: "b", age: 17 },
    { name: "c", age: 16 },
    { name: "d", age: 22 },
  ];

  const adults = result(people);
  console.log(adults);