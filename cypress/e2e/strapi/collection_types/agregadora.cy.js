/// <reference types="cypress" />

describe('LOgin', () => {
    it('Login', () => {
        cy.visit('admin/auth/login')
        const user = {
            email: 'fabio@gmail.com',
            senha: 'Passw0rd'
        }
        cy.get('#textinput-1').type(user.email)
        cy.get('#textinput-2').type(user.senha)
        cy.contains('button', 'Login').click()

    });
});