import { useEffect, useState } from "react"

export function Exemplo1(){
    const [numero, setNumero] = useState (0)

    useEffect (() => {
        console.log(`O estado número mudou. Seu valor agota é ${numero}`)
    }, [numero])

    return (
        <section>
            <h2>Exemplo 1: utilizações de useEffect</h2>
            <p>O useEffect tem duas utilidades principais:</p>
            <ol>
                <li>Executar alguma função ou algum bloco de código que a pogina for carregar </li>
                <li>Monitorar a mudança de um estado para executar algum bloco de código ou função</li>
            </ol>

            <div>
                <h3>Número: {numero}</h3>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            </div>


        
        </section>
    )
}