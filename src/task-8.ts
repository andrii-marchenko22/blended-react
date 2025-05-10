// Завдання:

// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.

// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:

// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.

// 4. Перевірте, що TypeScript не дозволяє передати в getPermi

// enum Role {
//   Admin,
//   User,
//   Guest,
// }

type Role = "Admin" | "User" | "Guest";

const getPermissions = (role: Role): string[] => {
  switch (role) {
    case "Admin":
      return ["create", "read", "update", "delete"];
    case "User":
      return ["read", "update"];
    case "Guest":
      return ["read"];
    default:
      return [];
  }
};

console.log(getPermissions("Admin"));
console.log(getPermissions("User"));
console.log(getPermissions("Guest"));
