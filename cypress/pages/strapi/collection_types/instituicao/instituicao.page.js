/// <reference types="cypress-xpath" />
import { el } from './elements'

class InstituicaoPage {

    acessComponent() {
        cy.get(el.collectionTypeInstitution).click()
    }

    clickOnCreateFormButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createInstitution() {
        cy.get(el.fieldTitle).type('Novo titulo')
        cy.get(el.fieldDescription).type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.get(el.addNewComponente).click()
        cy.get(el.btnBanner).click()
        cy.xpath(el.fieldTitleBanner).type('Novo titulo para Banner')
        cy.xpath(el.fieldSubTitleBanner).type('Nova descriçao para banner')
        cy.xpath(el.btnSelectImgBanner).click()
        cy.xpath(el.selectImgCheck).click()
        cy.xpath(el.btnConfirmImg).click()
    }
}

export default new InstituicaoPage()