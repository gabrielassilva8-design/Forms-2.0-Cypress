describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#input-nome').type('Gabriela Santos da Silva')
    cy.get('#input-email').type('gabriela.s.silva@gmail.com')
    cy.get('#input-date').type('2008-04-20')
    cy.get('#input-password').type('1245678')
    cy.get('#select-state').select('9')
    cy.get('#female').click()
    cy.get('#check-js').check()
    cy.get('#enviar').click()
  })
})