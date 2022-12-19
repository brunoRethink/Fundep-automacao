/// <reference types="cypress-xpath" />
import Portal from "../../pages/portal/home.page.js"

describe('Deve validar', () => {
    beforeEach(() => {
        cy.portal()
        cy.clearCookies()
    })
    it('Acesso aos menus', () => {
        Portal.acessHome()
        Portal.menuFundep()
        Portal.menuSolucoes()
        Portal.manuPortais()
        Portal.menuOpotunidade()
        Portal.menuTransparencia()
        Portal.manuContato()
    });
});