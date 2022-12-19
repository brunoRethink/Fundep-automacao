// /// <reference types="cypress-xpath" />
// import VacancyPage from "../../../pages/strapi/collection_types/vaga/vaga.page"

// describe('Should access the vacancy collection types', () => {
//     beforeEach(() => {
//         cy.login()
//         cy.acessContentManager()
//     })

//     afterEach(() => {
//         cy.logout()
//     })
    
//     it('And create a content for vacancy', () => {
//         VacancyPage.acessComponent()
//         VacancyPage.clickOnCreateVacancyButton()
//         VacancyPage.createVacancy()
        
//         cy.saveComponent()
//         cy.publishComponent()
//         cy.buildProject()
//     });
// });