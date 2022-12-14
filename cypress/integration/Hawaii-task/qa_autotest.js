describe('Восстановление пароля', function () {
   it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click();
      cy.contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Проверка авторизации', function () {
   it('Позитивный кейс: валидные логин и пароль', function () {
      cy.reload();
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Проверка авторизации', function () {
   it('Негативный кейс: верный логин и неверный пароль', function () {
      cy.reload();
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})


describe('Проверка авторизации', function () {
   it('Негативный кейс: неверный логин и верный пароль', function () {
      cy.reload();
      cy.get('#mail').type('germ@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').click();
    })
})
