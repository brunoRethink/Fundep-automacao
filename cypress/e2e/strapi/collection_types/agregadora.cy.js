// /// <reference types="cypress-xpath" />
// import AgregadoraPage from "../../../pages/strapi/collection_types/agregadora/agregadora.page"

// describe('Should access the aggregator collection types', () => {
//     beforeEach(() => {
//         cy.login()
//         cy.acessContentManager()    
//     })

//     it('And create a content for aggregator', () => {
//         AgregadoraPage.acessComponent()
//         AgregadoraPage.clickOnCreateAggregatorButton()
//         AgregadoraPage.createNewContentAggregator()
//         AgregadoraPage.fillInInformationTab()
//         AgregadoraPage.fillInInformationAggregator()
        
//         cy.saveComponent()
//         cy.publishComponent()
//         cy.buildProject()
//         cy.clearCookies()
//         cy.logout()
        
//     });

//     it.only('clear agredadora', () => {
//         AgregadoraPage.acessComponent()
//         while (cy.get('[aria-rowindex="2"] > [aria-colindex="8"] > .sc-dvQaRk > :nth-child(3) > span > .sc-kHOZwM').should('be.visible')) {
//             cy.get('[aria-rowindex="2"] > [aria-colindex="8"] > .sc-dvQaRk > :nth-child(3) > span > .sc-kHOZwM').click()
//             cy.get('#confirm-delete').click()
//         }
//         this.skip()
//     })
// });