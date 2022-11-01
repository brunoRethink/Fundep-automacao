/// <reference types="cypress-xpath" />
import { el } from './elements'

class VacancyPage {
    acessComponent() {
        cy.get(el.collectionTypeProject).click()
    }

    clickOnCreateVacancyButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createVacancy() {
        cy.get(el.fieldTitle).type('Nova vaga criada')
        cy.get(el.fieldFormation).type('formaçao')
        cy.get(el.fieldProject).type('Novo projeto criado')
        cy.get(el.fieldPosition).type('Novo cargo inserido')
        cy.get(el.fieldNumberProject).type('001')
        cy.get(el.fieldWorkLocation).type('Novo local inserido')
        cy.get(el.fieldActivities).type('Nova atividade inserida')
        cy.get(el.fieldWorkload).type('40')
        cy.get(el.fieldSalary).type('R$ 2.000,00')
        cy.get(el.fieldSkills).type('LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ')
        cy.get(el.fieldDescription).type('LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ')
    }

}

export default new VacancyPage()