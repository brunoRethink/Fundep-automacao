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
    cy.visit('http://150.164.30.91:8080/admin/auth/login')
    const user = {
        email: 'fundep@test.com',
        senha: 'i8c0Y!R71&Ux'
    }
        cy.get('#textinput-1').type(user.email)
        cy.get('#textinput-2').type(user.senha)
        cy.contains('button', 'Login').click()
        cy.clearCookies()
})

Cypress.Commands.add('logout', () =>{
    if (cy.get('#main-nav-user-button > .ezFBXj > .sc-OVzLa').should('be.visible')) {
        cy.get('#main-nav-user-button > .ezFBXj > .sc-OVzLa', {timeout: 5000}).click()
        cy.get('[logout="logout"]').click()
    }
})

Cypress.Commands.add('portal', () =>{
    cy.visit('http://150.164.30.91:3000/')
})

Cypress.Commands.add('saveComponent', () =>{
    cy.get("button[type='submit']").click()
    cy.get('.jXYelc > .sc-PWMHG').should('have.text', 'Saved')
})

Cypress.Commands.add('publishComponent', () =>{
    if (cy.xpath("(//button[@type='button'])[2]").should('have.text', 'Publish')) cy.xpath("(//button[@type='button'])[2]").click()
})

Cypress.Commands.add('buildProject', () =>{
    cy.get(':nth-child(2) > div.sc-fpGCtG > .sc-fpGCtG > :nth-child(3) > .sc-inrDdN > .sc-wAsCI').click()
    cy.get('.sc-eCImPb').click()
    cy.get('.lozLyH > .sc-kdneuM').should('have.text', 'Build has been triggered successfully')
})

Cypress.Commands.add('acessContentManager', () =>{
    cy.xpath("//span[text()='Content Manager']").click()
})

Cypress.Commands.add('acessMenuFundep', () =>{
    cy.get(':nth-child(3) > [data-testid="root-trigger--1"]').trigger('mouseover', {force: true})
})