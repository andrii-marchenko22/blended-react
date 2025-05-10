// Типізуйте функцію повністю: параметри і повернення функції.

// function createUser({ name, age }) {
//   createUser({ name: "Alice", age: 30 });
// }

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

interface createUserParams {
  name: string;
  age: number;
}

function createUser({ name, age }: createUserParams): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
