describe("Log in", function () {

    beforeEach(() => {
        cy.visit("https://unsplash.com/")
    })

    // Sign in: correct e - mail, wrong password
    it("Sign in: correct e-mail, wrong password", function () {
        cy.contains("Login").click()
        cy.url().should('include', '/login')
        cy.get('input[type="email"]').type('domovou69@gmail.com').should('have.value', 'domovou69@gmail.com')
        cy.get('input[type="password"]').type('Pas$wOrD')
        cy.get('input[type="submit"]').click()
        cy.get('body > div.flash.flash--alert.animated.js-flash.js-flash-alert > div > div > div.col-xs-10.col-sm-6.center-block.flash__message')
            .contains('Invalid email or password.')
    })

    //Sign in: wrong e-mail, correct password
    it("Sign in: wrong e-mail, correct password", function () {
        cy.contains("Login").click()
        cy.get('input[type="email"]').type('example@gmail.com').should('have.value', 'example@gmail.com')
        cy.url().should('include', '/login')
        cy.get('input[type="password"]').type('Pas$wOrD')
        cy.get('input[type="submit"]').click()
        cy.get('body > div.flash.flash--alert.animated.js-flash.js-flash-alert > div > div > div.col-xs-10.col-sm-6.center-block.flash__message')
            .contains('Invalid email or password.')
    })

    //Sign in: correct e-mail, correct password
    it("Sign in: correct e-mail, correct password", function () {
        cy.contains("Login").click()
        cy.get('input[type="email"]').type('domovou69@gmail.com').should('have.value', 'domovou69@gmail.com')
        cy.url().should('include', '/login')
        cy.get('input[type="password"]').type('mi9sh66a')
        cy.get('input[type="submit"]').click()
    })

    //Search: Nature
    it("Search: Nature", function () {
        cy.get('#app > div > div:nth-child(4) > div._1rBwv > div > div._39VkE > div.y_7_u._2sCnE.PrOBO._1CR66 > div > div > div > div > div:nth-child(1) > form > button')
            .type('nature')
            .click()
        cy.url().should('include', '/s/photos/nature')
        cy.get('#app > div > div:nth-child(3) > div._2v9nm._2sCnE.PrOBO._1CR66 > h1').contains('Nature')
    })
})