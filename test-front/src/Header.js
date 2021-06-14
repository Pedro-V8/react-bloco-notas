import React from 'react';
import "./Header.css"
import mais from "./images/mais.png"


function mostra(){
    document.querySelector('.bg-modal').style.display = 'flex'
}

function cancela(){
    document.querySelector('.bg-modal').style.display = 'none'  
}
function Header(){
    return(
        <div>
            <h1>MY NOTES</h1>
            <div id="linha"></div>

            <div id="option" onClick={ mostra }>
                <img src={mais} id="imagem"></img>
            </div>

            <div className="bg-modal">
                <div className="container">
                    <textarea className="title"></textarea>
                    <label for="story"></label>
                    <textarea className="story"></textarea>


    
                    <button className="cancel" onClick={ cancela }>CANCELAR</button>
                    <button className="save">SALVAR</button>

                </div>

            </div>
        </div>
    )
}

export default Header;