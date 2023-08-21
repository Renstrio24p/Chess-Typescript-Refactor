import styles from '../../sass/modules/app.module.scss';
import { AllowDrop, Drag, Drop } from './drag.function';

export let LegalSquares: string[] = [];

const SquareBoardsArray: SquareInfo[] = [] // Initialize SquareBoardsArray here


// Define constants for better readability
const BoardSquares = document.getElementsByClassName(styles.square),
    pieces = document.getElementsByClassName(styles.piece),
    ImagePiece = document.getElementsByTagName('img');

export let color = '',
    TypesPiece = '',
    PiecesID = '',
    squareID = '';

export let row: number,
    column: string,
    square: any;

interface SquareInfo {
    squareID: string;
    ColorPiece: string;
    TypesPiece: string;
    PiecesID: string;
}

export default function Moves() {
    setupBoardofSquares();
    setupPieces();


    function FillBoardofSquaresArray() {
        for (let i = 0; i < BoardSquares.length; i++) {
            row = 8 - Math.floor(i / 8);
            column = String.fromCharCode(97 + (i % 8));
            square = BoardSquares[i];
            square.id = column + row;

            if (square.querySelector(`.${styles.piece}`)) {
                color = square.querySelector(`.${styles.piece}`)?.getAttribute('color') || '';
                TypesPiece = square.querySelector(`.${styles.piece}`)?.classList[1] || '';
                PiecesID = square.querySelector(`.${styles.piece}`).id || '';
            } else {
                color = 'blank';
                TypesPiece = 'blank';
                PiecesID = 'blank';
            }

            const ElementsArray: SquareInfo = {
                squareID: square.id,
                ColorPiece: color,
                TypesPiece: TypesPiece,
                PiecesID: PiecesID,
            };

            SquareBoardsArray.push(ElementsArray);
        }
    }

    function setupBoardofSquares() {
        for (let i = 0; i < BoardSquares.length; i++) {
            const square = BoardSquares[i] as HTMLElement;
            square.addEventListener('dragover', AllowDrop);
            square.addEventListener('drop', Drop);
            let row = 8 - Math.floor(i / 8),
                column = String.fromCharCode(97 + (i % 8));
            square.id = column + row;
        }
        FillBoardofSquaresArray(); // Call FillBoardofSquaresArray after defining SquareBoardsArray
    }

    function setupPieces() {
        for (let i = 0; i < pieces.length; i++) {
            const piece = pieces[i] as HTMLElement;
            piece.addEventListener('dragstart', Drag);
            piece.setAttribute('draggable', 'true');
            piece.id = piece.className.split(' ')[1] + piece.parentElement?.id;
        }
        for (let i = 0; i < ImagePiece.length; i++) {
            ImagePiece[i].setAttribute('draggable', 'false');
        }
    }
}
