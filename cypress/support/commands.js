Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName') .type('Ana')
    cy.get('#lastName') .type('Vida')
    cy.get('#email') .type('testvida@gmail.com')
    cy.get('#open-text-area') .type('teste')
    cy.contains('button', 'Enviar') .click()
})