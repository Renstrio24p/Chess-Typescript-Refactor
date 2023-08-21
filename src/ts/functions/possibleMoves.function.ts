import { GetBishopsMoves, GetCastleMoves, GetKingsMoves, GetKnightMoves, GetPawnMoves, GetQueensMoves } from "./moves/pieces.moves";


export function getPossibleMoves(startingSquareId: string, piece: any,SquareBoardsArray: any ) {
    const ColorPiece = piece.getAttribute('color');
    if(piece.classList.contains('pawn')){
        GetPawnMoves(startingSquareId,ColorPiece);
    }
    if(piece.classList.contains('knight')){
        GetKnightMoves(startingSquareId,ColorPiece);
    }
    if(piece.classList.contains('rook')){
        GetCastleMoves(startingSquareId,ColorPiece);
    }
    if(piece.classList.contains('bishop')){
        GetBishopsMoves(startingSquareId,ColorPiece);
    }
    if(piece.classList.contains('queen')){
        GetQueensMoves(startingSquareId,ColorPiece);
    }

    if(piece.classList.contains('king')){
        GetKingsMoves(startingSquareId,ColorPiece);
    }

    console.log(piece.classList.contains('pawn'));
  }