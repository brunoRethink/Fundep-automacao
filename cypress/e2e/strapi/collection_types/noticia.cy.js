/// <reference types="cypress-xpath" />
import NewsPage from "../../../pages/strapi/collection_types/noticia/noticia.page"
import Component from "../../../pages/strapi/collection_types/component/component.page"

describe('Should access the institution collection types', () => {
    beforeEach(() => {
        cy.login()
        cy.acessContentManager()
    })
    it('And create a content for institution', () => {
        NewsPage.acessComponent()
        NewsPage.clickOnCreateNewsButton()
        NewsPage.createNews()

        Component.createBanner()
        Component.createBannerWithButton()
        Component.createGallery()
        Component.createParagraphWithBanner()
        Component.createSigleParagraph()
        Component.createVideo()
        
        cy.saveComponent()
        cy.publishComponent()
        cy.buildProject()
    });
});