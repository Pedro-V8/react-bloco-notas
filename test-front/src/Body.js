import React, { useEffect, useState } from 'react';
import './Body.css'

function Body(){
    const [tarefasUser, setTarefasUser] = useState([])

    const getTarefas = async function(){
        const response = await fetch('http://localhost:3333/notes') 
        setTarefasUser(await response.json())
    }

    useEffect(() => {
        getTarefas() 
    }, [])
    
    return(
        <ul>
            {
                tarefasUser.map(({ titulo }) => <li>{titulo}</li>)
            }
        </ul>
    ) 
}

export default Body;