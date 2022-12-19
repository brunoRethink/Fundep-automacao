/// <reference types="cypress-xpath" />
import { el } from './elements'

class HomePage {
    acessHome() {
        cy.get(el.logo).should('be.visible')
    }

    menuFundep() {
        cy.get('#rcc-confirm-button').click()
        cy.acessMenuFundep()
        cy.xpath("//span[text()='Quem Somos']").click()
        cy.url().should('eq', 'http://150.164.30.91:3000/quemsomos')
        
        cy.acessMenuFundep()
        cy.xpath("//span[text()='Estrutura']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/estrutura')

        cy.acessMenuFundep()
        cy.xpath("//span[text()='Fundepar']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/fundepar')

        cy.acessMenuFundep()
        cy.xpath("//span[text()='Galeria de Diretores']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/galeriadiretores')

        cy.acessMenuFundep()
        cy.xpath("//span[text()='Histórico']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/historico')

        cy.acessMenuFundep()
        cy.xpath("//span[text()='Instituições Apoiadas']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/instituicoes')

        cy.acessMenuFundep()
        cy.xpath("//span[text()='UFMG']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/ufmg')

    }

    menuSolucoes() {
        cy.get('#button--submenu_1').trigger('mouseover', {force: true})
        cy.xpath("(//span[text()='Projetos'])[1]").click({force: true})
        cy.xpath("//div[text()='Projetos']").should('have.text', 'Projetos')

        cy.get('#button--submenu_1').trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Programas']").click()
        cy.url().should('eq', 'http://150.164.30.91:3000/programas')

        cy.get('#button--submenu_1').trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Concursos']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/concursos')
    }

    manuPortais() {
        cy.get("#button--submenu_2").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Espaço do Coordenador']").should('have.text', 'Espaço do Coordenador')

        cy.get("#button--submenu_2").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Espaço do Colaborador']").should('have.text', 'Espaço do Colaborador')

        cy.get("#button--submenu_2").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Portal de Compras']").should('have.text', 'Portal de Compras')
    }

    menuOpotunidade() {
        cy.xpath("//button[text()='Oportunidade']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Cursos e Eventos']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/cursoeventos')

        cy.xpath("//button[text()='Oportunidade']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Vagas']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/vagas')
    }

    menuTransparencia() {
        cy.xpath("//button[text()='Transparencia']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Portal da Transparência']").should('have.text', 'Portal da Transparência')

        cy.xpath("//button[text()='Transparencia']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Painel de Gestão']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/paineldegestao')

        cy.xpath("//button[text()='Transparencia']").trigger('mouseover', {force: true})
        cy.xpath("(//span[text()='Compliance'])[1]").click({force: true})
        cy.xpath("//div[text()='Coisas de Compliance']").should('have.text', 'Coisas de Compliance')

        cy.xpath("//button[text()='Transparencia']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Avaliações de Desempenho']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/avaliacoesdesempenho')

        cy.xpath("//button[text()='Transparencia']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Relatórios de Gestão']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/relatoriogestao')

        cy.xpath("//button[text()='Transparencia']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Fiscalizações e Auditoria']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/fiscalizacaoauditoria')
    }

    manuContato() {
        cy.xpath("//button[text()='Contato']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Fale Conosco']").click({force: true})
        cy.xpath("//div[text()='Fale Conosco']").should('have.text', 'Fale Conosco')

        cy.xpath("//button[text()='Contato']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Denúncia']").click({force: true})
        cy.url().should('eq', 'https://canal.ouvidordigital.com.br/fundep')
        cy.go('back')

        cy.xpath("//button[text()='Contato']").trigger('mouseover', {force: true})
        cy.xpath("//span[text()='Perguntas Frequentes']").click({force: true})
        cy.url().should('eq', 'http://150.164.30.91:3000/faq')

    }
}

export default new HomePage()