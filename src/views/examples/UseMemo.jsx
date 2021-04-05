import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const sum = function(v1, v2){
    const sleep = Date.now() + 2000
    while(Date.now() < sleep){}
    return v1 + v2
}

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    /*
    const [result, setResult] = useState(0)
    useEffect(function(){
        setResult( sum(n1, n2))
    },[n1,n2])
    */

    const result = useMemo(() => sum(n1, n2), [n1,n2])
    
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <input type="number" className="input"
                    value={n1}
                    onChange={ e => setN1(parseInt(e.target.value))}
                />
                <input type="number" className="input"
                    value={n2}
                    onChange={ e => setN2(parseInt(e.target.value))}
                />
                <input type="number" className="input"
                    value={n3}
                    onChange={ e => setN3(parseInt(e.target.value))}
                />
                <span className="text red">{result}</span>
            </div>

        </div>
    )
}

export default UseMemo
