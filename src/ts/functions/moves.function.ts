import styles from '../../sass/modules/app.module.scss';
import { AllowDrop, Drag, Drop } from './drag.function';

export let LegalSquares: string[] = [],
    SquareBoardsArray: string[] = [];

export const BoardSquares = document.getElementsByClassName(`${styles.square}`) as any,
    pieces = document.getElementsByClassName(`${styles.piece}`) as any,
    ImagePiece = document.getElementsByTagName('img') as any;

let color = '',
    TypesPiece = '',
    PiecesID = '';



export default function Moves() {

    setupBoardofSquares();
    setupPieces();
    FillBoardofSquaresArray();

    interface SquareInfo {
        squareID: string;
        ColorPiece: string;
        TypesPiece: string;
        PiecesID: string;
    }
    
    const SquareBoardsArray: SquareInfo[] = []; // Initialize as an empty array of SquareInfo objects
    
    function FillBoardofSquaresArray() {
        for (let i = 0; i < BoardSquares.length; i++) {
            let row = 8 - Math.floor(i / 8),
                column = String.fromCharCode(97 + (i % 8)),
                square = BoardSquares[i];
    
            square.id = column + row;
            let color, TypesPiece, PiecesID;
    
            if (square.querySelector(`.${styles.piece}`)) {
                color = square.querySelector(`.${styles.piece}`).getAttribute('color');
                TypesPiece = square.querySelector(`.${styles.piece}`).classList[1];
                PiecesID = square.querySelector(`.${styles.piece}`).id;
            } else {
                color = 'blank';
                TypesPiece = 'blank';
                PiecesID = 'blank';
            }
    
            let ArraysOfElements: SquareInfo = {
                squareID: square.id,
                ColorPiece: color,
                TypesPiece: TypesPiece,
                PiecesID: PiecesID
            };
    
            SquareBoardsArray.push(ArraysOfElements);
        }
    }
    

    function setupBoardofSquares() {
        for (let i = 0; i < BoardSquares.length; i++) {
            const square = BoardSquares[i]; // Define the square here
            square.addEventListener('dragover', AllowDrop);
            square.addEventListener('drop', Drop);
            let row = 8 - Math.floor(i / 8),
                column = String.fromCharCode(97 + (i % 8));
            square.id = column + row;
        }
    }

    function setupPieces() {
        for (let i = 0; i < pieces.length; i++) {
            const piece = pieces[i];
            piece.addEventListener('dragstart', Drag);
            piece.setAttribute('draggable', true);
            piece.id = piece.className.split(" ")[1] + piece.parentElement.id;
        }
        for (let i = 0; i < ImagePiece.length; i++) {
            ImagePiece[i].setAttribute('draggable', false);
        }
    }



}
