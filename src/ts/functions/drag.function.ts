import { LegalSquares } from './moves.function';
import { getPossibleMoves } from './possibleMoves.function';
import { isSquareOccupied } from './squares.function';

let isWhiteTurn = true;

const SquareBoardsArray: any[] = []

// Set Draggable Drop to prevent from reset.

export function AllowDrop(e: DragEvent){
    e.preventDefault();
}

// Drop Event

export function Drag(e: DragEvent){
    const piece = e.target as any,
          ColorPiece = piece.getAttribute('color');
    if ((isWhiteTurn && ColorPiece == 'white') || (!isWhiteTurn && ColorPiece == 'black')) {
        e.dataTransfer?.setData('text', piece.id);
        const startingSquares = piece.parentNode.id;
        getPossibleMoves(startingSquares, piece, SquareBoardsArray);
    }
}

// Drop Event

export function Drop(e: DragEvent){
    e.preventDefault();
    let data = e.dataTransfer?.getData('text');
    if (data) {
        const piece = document.getElementById(data);
        const DestinationSquare = e.currentTarget as HTMLDivElement;
        const DestinationSquareID = DestinationSquare.id;
        if((isSquareOccupied(DestinationSquare as HTMLDivElement) == 'blank')&&(LegalSquares.includes(DestinationSquareID))){
            DestinationSquare.appendChild(piece!);
            isWhiteTurn =! isWhiteTurn;
            LegalSquares.length = 0;
            return;
        }
        if((isSquareOccupied(DestinationSquare as HTMLDivElement) != 'blank')&&(LegalSquares.includes(DestinationSquareID))){
            while(DestinationSquare.firstChild){
                DestinationSquare.removeChild(DestinationSquare.firstChild)
            }
            DestinationSquare.appendChild(piece!);
            isWhiteTurn =! isWhiteTurn;
            return;
        }
    }
}
