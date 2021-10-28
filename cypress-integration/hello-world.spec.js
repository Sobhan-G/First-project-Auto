describe('hello world project', function(){

    It('open google page' , function(){
        cy.visit('htt://www.google.com/')
        cy.get('.glFyf').type('sobhan')
    })


})
