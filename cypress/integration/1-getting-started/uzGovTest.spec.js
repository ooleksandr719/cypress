context('uz.gov', () => {
    const link = 'https://uz.gov.ua/';
    
    beforeEach(() => {    
      cy.visit(link)
    })
       it('1)Navigation to booking page test',() => {
         cy. contains ('eng')
         .click({force: true})
         cy.contains('Passengers')
         .click({force: true})
         cy.contains('Reservation / purchase travel documents')
         .click({force: true})
         cy.get(".simpletext")
           .find('a')
           .first()
           .then(function ($a) {
            const href = $a.prop('href')
           cy.visit(href)
            cy.url().should('include', 'booking.uz.gov.ua/en/')
          })
        })
    

         
         
})