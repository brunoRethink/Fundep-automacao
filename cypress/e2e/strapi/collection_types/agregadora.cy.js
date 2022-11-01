/// <reference types="cypress-xpath" />
import AgregadoraPage from "../../../pages/strapi/collection_types/agregadora/agregadora.page"

describe('Should access the aggregator collection types', () => {
    beforeEach(() => {
        cy.login()
        cy.acessContentManager()    
    })

    afterEach(() => {
        cy.logout()
    })
    
    it('And create a content for aggregator', () => {
        AgregadoraPage.acessComponent()
        AgregadoraPage.clickOnCreateAggregatorButton()
        AgregadoraPage.createNewContentAggregator()
        AgregadoraPage.fillInInformationTab()
        AgregadoraPage.fillInInformationAggregator()
        
        cy.saveComponent()
        cy.publishComponent()
        cy.buildProject()
        
    });
});