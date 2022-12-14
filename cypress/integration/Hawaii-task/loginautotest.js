describe('Проверка авторизации', function () {
   it('Позитивный кейс: валидные логин и пароль', function () {
      cy.visit('https://staya.dog/');
      cy.get('.header-bottom__right--link').click();
      cy.get('.auth-form > form > [type="email"]').type('invento7@yandex.ru');
      cy.get('.auth-form > form > [type="password"]').type('1234567');
      cy.get('.auth-form__submit > .s-button__content').click();
      cy.contains('Мои заказы');
    })
})



describe('Проверка ошибки авторизации', function () {
   it('Негативный кейс: верный логин и неверный пароль', function () {
      cy.get('button.profile__nav-link').click();
      cy.get('.box__button_ok').click();
      cy.get('.header-bottom__right--link').click();
      cy.get('.auth-form > form > [type="email"]').type('invento7@yandex.ru');
      cy.get('.auth-form > form > [type="password"]').type('A234569');
      cy.get('.auth-form__submit > .s-button__content').click();
      cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})