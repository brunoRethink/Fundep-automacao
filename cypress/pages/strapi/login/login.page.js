/// <reference types="cypress-xpath" />
import el from './elements.js'

function login() {
    cy.visit('http://150.164.30.91:5000/admin/auth/login')
    const user = {
        email: 'fabio@gmail.com',
        senha: 'Passw0rd'
    }
    cy.get(el.email).type(user.email)
    cy.get(el.senha).type(user.senha)
    cy.contains('button', 'Login').click()
}

export {
    login
}