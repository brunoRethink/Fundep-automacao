// /// <reference types="cypress-xpath" />
// import EventPage from "../../../pages/strapi/collection_types/evento/evento.page.js"

// describe('Should access the event collection types', () => {
//     beforeEach(() => {
//         cy.login()
//         cy.acessContentManager()
//     })

//     afterEach(() => {
//         cy.logout()
//     })
    
//     it('And create a content for event', () => {
//         EventPage.acessComponent()
//         EventPage.clickOnCreateEventButton()
//         EventPage.createNewEvent()
//         EventPage.addBanner()
//         EventPage.addParagraphWithBackground()
//         EventPage.addSingleParagraph()

//         cy.saveComponent()
//         cy.publishComponent()
//         cy.buildProject()
//     });
// });