import React from 'react';
import './Body.css'

function Body(){

    const tarefasUser = []
    const getTarefas = async function(){
        const response = await fetch('http://localhost:3333/notes') 
        const data = await response.json()
        tarefasUser.push(data)
        console.log(tarefasUser)
    }
    getTarefas()
    return(
        <div>HI</div>
    ) 
}

export default Body;