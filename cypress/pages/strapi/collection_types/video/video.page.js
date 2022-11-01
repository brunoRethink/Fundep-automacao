/// <reference types="cypress-xpath" />
import { el } from './elements'

class VideoPage {
    acessComponent() {
        cy.get(el.collectionTypeProject).click()
    }

    clickOnCreateVideotButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createVideo() {
        // cy.get(el.btnCreateNewEntry).click()
    }
}

export default new VideoPage()