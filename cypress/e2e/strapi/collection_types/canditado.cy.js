// /// <reference types="cypress-xpath" />
// import CandidatoPage from "../../../pages/strapi/collection_types/candidato/candidato.page"

// describe('Should access the candidate collection types', () => {
//     beforeEach(() => {
//         cy.login()
//         cy.acessContentManager()
//     })

//     afterEach(() => {
//         cy.logout()
//     })
    
//     it('And create a content for candidate', () => {
//         CandidatoPage.acessComponent()
//         CandidatoPage.clickOnCreateCandidateButton()
//         CandidatoPage.createNewCandidate()

//         cy.saveComponent()
//         cy.publishComponent()
//         cy.buildProject()
//     });
// });