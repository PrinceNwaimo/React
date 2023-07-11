import React from 'react'
import './Toe.js'
import './Tac.css'
function Tic (){
        return(
            <main class ="background">
                <section class ="title">
                    <hi>Tic Tac Toe</hi>
                </section>
                <section class ="display">
                    Player turn <span class="display-player playerX">X</span>
                </section>
                <section class ="container">
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>
                    <div class = "tile"></div>

                </section>
                <section class="display announcer hide"></section>
                <section class="controls">
                    <button id ="reset">Reset</button>
                </section>
            </main>


        )

}
export default Tic