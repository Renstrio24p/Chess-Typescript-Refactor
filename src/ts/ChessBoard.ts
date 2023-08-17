import Chess_Render from '../render/chess.render'
import styles from '../sass/modules/app.module.scss'
import Moves from './functions/moves.function';



export default function ChessBoard(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
         <div class='${styles.chessboard}'>
                <div id='rank8'></div>
                <div id='rank7'></div>
                <div id='rank6'></div>
                <div id='rank5'></div>
                <div id='rank4'></div>
                <div id='rank3'></div>
                <div id='rank2'></div>
                <div id='rank1'></div>
         </div>
    `)

    Chess_Render();
    Moves();
}