/// <reference types="cypress-xpath" />
import Portal from "./home.page"

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