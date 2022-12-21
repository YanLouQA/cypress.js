// Test Goals:
// 1. Testing the password recovery form;
// Authorization form testing:
// 2. Positive case: correct login and password;
// 3. Negative case: correct login and wrong password;
// 4. Negative case: wrong login and correct password;


describe('Восстановление пароля', function () {
   it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('correct mail');
      cy.get('#restoreEmailButton').click();
      cy.contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Проверка авторизации', function () {
   it('Позитивный кейс: валидные логин и пароль', function () {
      cy.reload();
      cy.get('#mail').type('correct mail');
      cy.get('#pass').type('correct password');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Проверка авторизации', function () {
   it('Негативный кейс: верный логин и неверный пароль', function () {
      cy.reload();
      cy.get('#mail').type('correct mail');
      cy.get('#pass').type('incorrect password');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Проверка авторизации', function () {
   it('Негативный кейс: неверный логин и верный пароль', function () {
      cy.reload();
      cy.get('#mail').type('incorrect mail');
      cy.get('#pass').type('correct password');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})
