/// <reference types="cypress-xpath" />
import { el } from './element'

class FormPage {

    acessComponent() {
        cy.get(el.collectionTypeForm).click()
    }

    clickOnCreateFormButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createNewForm() {
        cy.get(el.fieldName).type('Novo nome')
        cy.get(el.fieldEmail).type('testeUserRrethink@.gmail.com')
        cy.get(el.fieldCPF).type('053.220.891-99')
        cy.get(el.fieldMsg).type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.get(el.fieldFone).type('(61)99873-7644')
        cy.get(el.fieldReason).click()
        cy.get(el.fieldArea).type('Tecnologia')
        cy.get(el.fieldMobilePhone).type('(99)99999-9999')
    }
}

export default new FormPage()