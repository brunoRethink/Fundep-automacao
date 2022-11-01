/// <reference types="cypress-xpath" />
import ProjectPage from "../../../pages/strapi/collection_types/projeto/projeto.page"

describe('Should access the project collection types', () => {
    beforeEach(() => {
        cy.login()
        cy.acessContentManager()
    })

    it('And create a content for project', () => {
        ProjectPage.acessComponent()
        ProjectPage.clickOnCreateProjetctButton()
        ProjectPage.createProjetct()
        ProjectPage.createParagraphWithBanner()
        ProjectPage.createParagraphWithBackground()
        ProjectPage.createSigleParagraph()
        
        cy.saveComponent()
        cy.publishComponent()
        cy.buildProject()
        cy.logout()
    });
});