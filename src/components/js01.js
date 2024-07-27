    function numero(){

        const numero1 = 5
        const letra1 = "Hola"
        const boole = true

        const resultado = {
            resultado1: numero1 + letra1,
            resultado2: letra1 + boole,
            resultado3: numero1 + numero1
        }
        const{resultado1, resultado2, resultado3} = resultado
        console.log(resultado1)
        console.log(resultado2)
        console.log(resultado3)
    }

    numero()


