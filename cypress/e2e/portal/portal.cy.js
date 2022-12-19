/// <reference types="cypress-xpath" />
import Portal from "../../pages/portal/home.page.js"

describe('Should access the aggregator collection types', () => {
    beforeEach(() => {
        cy.portal()
    })
    it('And create a content for aggregator', () => {
        Portal.acessHome()
        Portal.acessMenuQuemSomos()
        Portal.acessMenuhistorico()
    });
});