/// <reference types="cypress-xpath" />
import { el } from './elements.js'

class EventoPage {
    acessComponent() {
        cy.xpath(el.collectionTypeEvent).click()
    }

    clickOnCreateEventButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createNewEvent() {
        cy.get(el.fieldNameEvent).type('Novo Evento Rethink')
        cy.get(el.fieldDateEvent).click()
        cy.get(el.selectDataEvent).click()
        cy.get(el.fieldImgEvent).click()
        cy.get(el.selectImgEvent).click()
        cy.get(el.btnConfirmImgEvent).click()
    }

    addContentEvent() {
        cy.get(el.btnCreateContent).click()
    }
    
    addBanner() {
        cy.get(el.selectBanner).click()
        cy.xpath(el.fieldTitleBanner).type('Titulo do banner criado')
        cy.xpath(el.fieldSubTitleBanner).type('Subtitulo do banner criado')
        cy.get(el.fieldImgBanner).click()
        cy.get(el.selectImgBanner).click()
        cy.get(el.btnConfirmImgBanner).click()

    }
}

export default new EventoPage()