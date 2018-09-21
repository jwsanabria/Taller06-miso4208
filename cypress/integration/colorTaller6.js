describe('Ejecucion de pruebas Visual Regression', function(){
   it('Generar paleta', function(){
        cy.visit('https://jwsanabria.github.io/Taller06-miso4208/VRT_colorPallete/palette.html')
        cy.screenshot('paleta-inicial')
        cy.contains('Generar nueva paleta').click()
        cy.screenshot('paleta-final')
    })
})
 