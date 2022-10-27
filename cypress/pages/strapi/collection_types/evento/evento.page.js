/// <reference types="cypress-xpath" />
import { el } from './elements.js'

class EventoPage {

    acessComponent() {
        cy.xpath(el.collectionTypeEvent).click()
    }

    clickOnCreateEventButton() {
        cy.get(el.btnCreateNewEntry).click()
    }

    createNewEvent() {
        cy.get(el.fieldNameEvent).type('Novo Evento Rethink')
        cy.get(el.fieldDateEvent).click()
        cy.get(el.selectDataEvent).click()
        cy.get(el.fieldImgEvent).click()
        cy.get(el.selectImgEvent).click()
        cy.get(el.btnConfirmImgEvent).click()
    }
    
    addBanner() {
        cy.get(el.btnCreateContent).click()
        cy.get(el.selectBanner).click()
        cy.xpath(el.fieldTitleBanner).type('Titulo do banner criado')
        cy.xpath(el.fieldSubTitleBanner).type('Subtitulo do banner criado')
        cy.get(el.fieldImgBanner).click()
        cy.get(el.selectImgBanner).click()
        cy.get(el.btnConfirmImgBanner).click()
    }

    addParagraphWithBackground() {
        cy.get(el.btnCreateContent).click()
        cy.get(el.fieldParagraphWithBackground).click()
        cy.xpath(el.fieldContentParagraph).type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.xpath(el.fieldTitleParagraph).type('titulo do paragrafo criado')
    }

    addSingleParagraph() {
        cy.get(el.btnCreateContent).click()
        cy.get(el.btnSingleParagraph).click()
        cy.xpath(el.fieldTitleSingleParagraph).type('Novo titulo do paragrafo simples')
        cy.xpath(el.fieldSubTitleParagraph).type('Novo subtitulo criado')
        cy.get(el.fieldContentSingleParagraph).type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.get(el.fieldAudio).type('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/372742355&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/yourparadis" title="soo" target="_blank" style="color: #cccccc; text-decoration: none;">soo</a> · <a href="https://soundcloud.com/yourparadis/sets/jazz-hip" title="Jazz hip" target="_blank" style="color: #cccccc; text-decoration: none;">Jazz hip</a></div>')
    }
}

export default new EventoPage()