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


describe('Проверка добавления товара', function () {
   it('Позитивный кейс: После авторизации перейти в каталог и добавить товар в корзину', function () {
      cy.contains('Каталог').click({force: true});
      cy.get('[href="/catalog/collars"] > span').click();
      cy.get(':nth-child(1) > .product-list > :nth-child(1) > .SProductCard__body > .SProductCard__name > .SProductCard__link').click();
      cy.get('.SSpoiler__container > :nth-child(3)').click();
      cy.get('[style="--Param-columns:1;"] > .SSpoiler > .SSpoiler__container > .SRadioButton > .option__name').click();
      cy.get('.CTA').click();
      cy.contains('Оформить заказ');
      cy.contains('Продолжить покупки').click();
      cy.contains('Мой профиль').click({force: true});
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
