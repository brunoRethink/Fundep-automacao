/// <reference types="cypress-xpath" />
import { el } from './elements'

class NoticiaPage {
    acessComponent() {
        cy.get(el.collectionTypeInstitution).click()
    }

    clickOnCreateNewsButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createNews() {
        cy.get(el.fieldCategory).type('Nova categoria criada')
        cy.get(el.fieldSubTitle).type('Novo subtitulo criado')
        cy.get(el.btnCapa).click()
        cy.xpath(el.selectImgCheckNews).click()
        cy.get(el.btnImgConfirm).click()
        cy.get(el.fieldArea).type('Nova area criada')
        cy.get(el.fieldDate).click()
        cy.get(el.selectDate).click()
        
    }

}

export default new NoticiaPage()