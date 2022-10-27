/// <reference types="cypress-xpath" />
import { el } from './elements.js'

class AgregadoraPage {
    acessComponent() {
        cy.xpath(el.acessContentManager).click()
        cy.get(el.acessAggregator).click()
    }

    clickOnCreateAggregatorButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createNewContentAggregator() {
        cy.xpath(el.addTab).click()
    }

    fillInInformationTab() {
        cy.xpath(el.fielNomeAba).type('Nova aba')
        cy.xpath(el.addNewLink).click()
        cy.xpath(el.link).type('https://www.youtube.com/')
        cy.xpath(el.titleLink).type('Link para youtube')
        cy.xpath(el.contentLink).type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.xpath(el.fieldTitle).type('Novo titulo')
        cy.xpath(el.fieldSubTitle).type('Novo subtitulo')
        cy.xpath(el.fieldContentTab).type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    }

    fillInInformationAggregator() {
        cy.get(el.btnBanner).click()
        cy.get(el.selectImgCheck).click()
        cy.get(el.btnConfirmImg).click()
        cy.get(el.fieldTitleBanner).type('Titulo do banner')
        cy.get(el.fieldSubTitleBanner).type('Subtitulo do banner')
    }
}

export default new AgregadoraPage()