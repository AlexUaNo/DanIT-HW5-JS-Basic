/* Homework 5
Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
При виклику функція повинна запитати ім'я та прізвище.
Використовуючи дані, введені юзером, створити об'єкт newUser з властивостями firstName та lastName.
Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені юзера, з'єднану з прізвищем, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
*/

let newUser = {
    firstName: "",
    lastName: "",
    getLogin: function() {
        newUser.loginName = (newUser.firstName[0] + newUser.lastName).toLowerCase();
        //newUser.loginName.toLowerCase();
        return this.loginName;
    }
};

function createNewUser(){
        newUser.firstName = prompt("Name: ", "");
        newUser.lastName = prompt("Surname: ", "");
        return newUser;
}

// Створити юзера за допомогою функції createNewUser().
createNewUser();
console.log(newUser);
newUser.getLogin();                 // Викликати у цього юзера функцію getLogin(). Вивести у консоль результат виконання функції.

// Додаткове завдання - Homework 5:
// Зробити так, щоб властивості firstName та lastName не можна було змінювати напряму.
Object.defineProperties(newUser, {
    "firstName": {
        value: "noName",
        writable: false,
    },
    "lastName": {
        value: "notSurname",
        writable: false,
    }
});
console.log(newUser.firstName);
console.log(newUser.lastName);


