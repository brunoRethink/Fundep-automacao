/// <reference types="cypress-xpath" />
import { el } from './elements.js'

class AgregadoraPage {
    acessComponent() {
        cy.get(el.collectionTypeCandidate).click()
    }

    clickOnCreateCandidateButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createNewCandidate() {
        cy.get(el.fieldName).type('Novo candidato')
        cy.get(el.fieldEmail).type('candidatoTesteRethink@gmail.com')
    }
}

export default new AgregadoraPage()