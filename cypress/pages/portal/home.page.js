/// <reference types="cypress-xpath" />
import { el } from './elements'

class HomePage {
    acessHome() {
        cy.get(el.logo).should('be.visible')
    }

    acessMenuQuemSomos() {
        cy.get(el.optionFundep).trigger('mouseover').should('be.visible')
        cy.get(el.quemSomos).click()
    }

    acessMenuhistorico() {
        cy.get(el.optionFundep).trigger('mouseover')
        cy.get(el.historico).click()
    }
}

export default new HomePage()