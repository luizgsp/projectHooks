import React, {useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1 ) * n
}


const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [ehPar, setEhPar] = useState(false)

    useEffect(
        function(){
            setFatorial(calcFatorial(number))
        },[number])

    useEffect(
        function(){
             setEhPar(number % 2 === 0 ? true : false)
        },[number]
    )

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div>
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial === -1 ? 'Número inválido': fatorial}</span>
            </div>
            <div className="center">
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02 - Par ou Impar" />
            <div className="center">
                <span className="text">{ ehPar ? 'Númro Par' : 'Número Impar'}</span>
            </div>
        </div>
    )
}

export default UseEffect
