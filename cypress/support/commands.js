// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () =>{
    cy.visit('http://150.164.30.91:5000/admin/auth/login')
    const user = {
        email: 'fabio@gmail.com',
        senha: 'Passw0rd'
    }
    cy.get('#textinput-1').type(user.email)
    cy.get('#textinput-2').type(user.senha)
    cy.contains('button', 'Login').click()
})

Cypress.Commands.add('logout',  () => {
    cy.get('#main-nav-user-button > .rhTnq', {timeout: 10000}).click()
    cy.get('.cCWvcQ', {timeout: 10000}).click()
    cy.get('.uEkCF > .sc-bvFjSx', {timeout: 10000}).should('be.be.visible')

})

Cypress.Commands.add('portal', () =>{
    cy.visit('http://150.164.30.91:3000/')
})

Cypress.Commands.add('saveComponent', () =>{
    cy.get('.gFLWth').click()
    cy.get('.lozLyH > .sc-kdneuM').should('have.text', 'Saved')
})

Cypress.Commands.add('publishComponent', () =>{
    if (cy.get('.hxJchj').should('have.text', 'Publish')) cy.get('.hxJchj').click()
})

Cypress.Commands.add('buildProject', () =>{
    cy.get(':nth-child(2) > .sc-heudyb > .sc-cSyqtw').click()
    cy.get('.sc-eCImPb').click()
    cy.get('.lozLyH > .sc-kdneuM').should('have.text', 'Build has been triggered successfully')
})

Cypress.Commands.add('acessContentManager', () =>{
    cy.get('.fCQWpQ > :nth-child(1) > .sc-heudyb > .sc-cSyqtw').click()
})