// /// <reference types="cypress-xpath" />
// import InstitutionPage from "../../../pages/strapi/collection_types/instituicao/instituicao.page"

// describe('Should access the institution collection types', () => {
//     beforeEach(() => {
//         cy.login()
//         cy.acessContentManager()
//     })

//     afterEach(() => {
//         cy.logout()
//     })
    
//     it('And create a content for institution', () => {
//         InstitutionPage.acessComponent()
//         InstitutionPage.clickOnCreateFormButton()
//         InstitutionPage.createInstitution()
        
//         cy.saveComponent()
//         cy.publishComponent()
//         cy.buildProject()
//     });
// });