//   Завдання:

//   Створіть тип для user.
//   Зробіть address необов’язковим.
//   Перевірте, що user.address?.city не викликає помилки.

interface User {
  name: string;
  address?: {
    city: string;
  };
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

const user1: User = {
  name: "Poly",
};

console.log(user);
console.log(user1);
