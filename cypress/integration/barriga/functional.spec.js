/// <reference types= "cypress"/>

describe('Should test at a funcional level', () => {
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('isa.santos@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('isalinda14')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should create an account', ()=>{
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso!')
    })

    it('Should update an account', () => {
        cy.xpath("//td[contains(.,'Conta teste')]/../td/a/i[@class='far fa-edit']").click()

  })
})

