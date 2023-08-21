import { LegalSquares, square, squareID } from "../moves.function";
import { isSquareOccupied } from "../squares.function";
import { MoveTo1stRankAFile, MoveTo1stRankHFile, MoveTo8thRankAFile, MoveTo8thRankHFile, checkDiagonalCaptures, checkMoveForwardMoves, moveTo1stRank, moveTo8thRank, moveToAnAisle, moveToHFile } from "./movelist";

// Pawn's Moves

export const GetPawnMoves = (startingSquareId: string, Colorpiece: string) => {
    checkDiagonalCaptures(startingSquareId, Colorpiece);
    checkMoveForwardMoves(startingSquareId, Colorpiece);
};

// Knight Moves

export const GetKnightMoves = (startingSquareId: string, Colorpiece: string) => {
    const file = startingSquareId.charCodeAt(0)-97,
          rank = startingSquareId.charAt(1),
          rankNumber = parseInt(rank);
    
    let FileCurrent = file,
        RankCurrent = rankNumber;
    
    const moves = [
        [-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]
    ]

    moves.forEach((move)=>{
        FileCurrent = file + move[0];
        RankCurrent = rankNumber + move[1];
        if(FileCurrent >= 0 && FileCurrent <= 7 && RankCurrent > 0 && RankCurrent <= 8){
            let SquareCurrentID = String.fromCharCode(FileCurrent + 97) + RankCurrent,
                SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
                ContentSquare = isSquareOccupied(SquareCurrent);
            if(ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
            LegalSquares.push(String.fromCharCode(FileCurrent + 97) + RankCurrent);
        }
    })
}

// Castle Moves

export const GetCastleMoves = (startingSquareId: string, Colorpiece: string) => {
    moveTo8thRank(startingSquareId, Colorpiece);
    moveTo1stRank(startingSquareId, Colorpiece);
    moveToAnAisle(startingSquareId, Colorpiece);
    moveToHFile(startingSquareId, Colorpiece);
}




// Bishop's Move

export const GetBishopsMoves = (startingSquareId: string, Colorpiece: string) => {
    MoveTo8thRankHFile(startingSquareId,Colorpiece);
    MoveTo8thRankAFile(startingSquareId,Colorpiece);
    MoveTo1stRankHFile(startingSquareId,Colorpiece);
    MoveTo1stRankAFile(startingSquareId,Colorpiece);
}



// Queen's Move

export const GetQueensMoves = (startingSquareId: string, Colorpiece: string) => {

    // Diagonal Moves

    MoveTo8thRankHFile(startingSquareId,Colorpiece);
    MoveTo8thRankAFile(startingSquareId,Colorpiece);
    MoveTo1stRankHFile(startingSquareId,Colorpiece);
    MoveTo1stRankAFile(startingSquareId,Colorpiece);

    // Aisle Moves

    moveTo8thRank(startingSquareId, Colorpiece);
    moveTo1stRank(startingSquareId, Colorpiece);
    moveToAnAisle(startingSquareId, Colorpiece);
    moveToHFile(startingSquareId, Colorpiece);



}

// King's Move and Cast

export const GetKingsMoves = (startingSquareId: string, Colorpiece: string) => {
    const file = startingSquareId.charCodeAt(0)-97,
          rank = startingSquareId.charAt(1),
          rankNumber = parseInt(rank);
    
    let FileCurrent = file,
        RankCurrent = rankNumber;
    
    // the king only moves 1 square at a time
    const moves = [
        [0,1],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[-1,0]
    ]

    moves.forEach((move)=>{
        FileCurrent = file + move[0];
        RankCurrent = rankNumber + move[1];
        if(FileCurrent >= 0 && FileCurrent <= 7 && RankCurrent > 0 && RankCurrent <= 8){
            let SquareCurrentID = String.fromCharCode(FileCurrent + 97) + RankCurrent,
                SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
                ContentSquare = isSquareOccupied(SquareCurrent);
            if(ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
            LegalSquares.push(String.fromCharCode(FileCurrent + 97) + RankCurrent);
        }
    })
}





