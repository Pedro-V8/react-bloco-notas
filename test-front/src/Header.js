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

            <div class="bg-modal">
                <div class="container">
                    <textarea class="title"></textarea>
                    <label for="story"></label>
                    <textarea class="story"></textarea>


    
                    <button class="cancel" onClick={ cancela }>CANCELAR</button>
                    <button class="save">SALVAR</button>

                </div>

            </div>
        </div>
    )
}

export default Header;