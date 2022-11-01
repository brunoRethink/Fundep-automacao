/// <reference types="cypress-xpath" />
import { el } from './elements'

class ProjectPage {
    acessComponent() {
        cy.get(el.collectionTypeProject).click()
    }

    clickOnCreateProjetctButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createProjetct() {
        cy.get(el.fieldTitlePrject).type('Nova projecto criado')
        cy.get(el.fieldPhotoPrject).click()
        cy.get(el.selectImg).click()
        cy.get(el.btnConfirmImg).click()
        cy.get(el.fieldDescriptionPrject).type('Descrição do projeto criado')
        cy.get(el.fieldCoordenationPrject).type('Campo coordenação')
        cy.get(el.fieldExecutionPrject).type('Campo executor')
        cy.get(el.fieldFunderPrject).type('Campo Financiador')
        cy.get(el.fieldStardDate).click()
        cy.xpath(el.startDateSelec).click()
        cy.get(el.fieldDueDate).click()
        cy.xpath(el.dueDateSelect).click()
    }

    createParagraphWithBanner() {
        cy.get(el.addComponent).click()
        cy.get(el.btnParagraphWithBanner).click()
        cy.xpath(el.contentParagraphWithBanner).type('Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ')
        cy.get(el.btnImgParagraphWithBanner).click()
        cy.get(el.selectImgBanner).click()
        cy.get(el.btnConfirmImg).click()
        cy.xpath(el.titleParagraphWithBanner).type('Novo titulo criado')
    }

    createParagraphWithBackground() {
        cy.get(el.addComponent).click()
        cy.get(el.btnBrackground).click()
        cy.xpath(el.fieldContentBrackground).type('Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ')
        cy.xpath(el.fieldTitleBrackground).type('Novo titulo criado')

    }

    createSigleParagraph() {
        cy.get(el.addComponent).click()
        cy.get(el.btnSigleParagraph).click()
        cy.xpath(el.fieldTileSigleParagraph).type('Novo titulo criado')
        cy.xpath(el.fieldSubTileSigleParagraph).type('Novo subtitulo criado')
        cy.xpath(el.fieldContentSigleParagraph).type('Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ')
        cy.xpath(el.fieldAudio).type('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/598944738&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lolollov2" title="lolovvveee2" target="_blank" style="color: #cccccc; text-decoration: none;">lolovvveee2</a> · <a href="https://soundcloud.com/lolollov2/sets/cosy-night-autumn" title="cosy night autumn" target="_blank" style="color: #cccccc; text-decoration: none;">cosy night autumn</a></div>')
    }
}

export default new ProjectPage()