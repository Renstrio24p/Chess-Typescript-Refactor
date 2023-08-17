import { LegalSquares } from "../moves.function";
import { isSquareOccupied } from "../squares.function";

// Pawn's Moves

export const GetPawnMoves = (startingSquareId: string, Colorpiece: string) => {
    checkDiagonalCaptures(startingSquareId, Colorpiece);
    checkMoveForwardMoves(startingSquareId, Colorpiece);
};

function checkDiagonalCaptures(startingSquareId: string, ColorPiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    const Direction = ColorPiece === 'white' ? 1 : -1;

    for (let i = -1; i <= 1; i += 2) {
        const fileOffset = file.charCodeAt(0) + i;
        if (fileOffset >= 'a'.charCodeAt(0) && fileOffset <= 'h'.charCodeAt(0)) {
            const targetSquareID = String.fromCharCode(fileOffset) + (rankNumber + Direction);
            const targetSquare = document.getElementById(targetSquareID) as HTMLDivElement;
            if (targetSquare) {
                const contentSquare = isSquareOccupied(targetSquare);
                if (contentSquare !== 'blank' && contentSquare !== ColorPiece) {
                    LegalSquares.push(targetSquareID);
                }
            }
        }
    }
}

function checkMoveForwardMoves(startingSquareId: string, ColorPiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    const Direction = ColorPiece === 'white' ? 1 : -1;

    const targetRank = rankNumber + Direction;
    if (targetRank >= 1 && targetRank <= 8) {
        const targetSquareID = file + targetRank;
        const targetSquare = document.getElementById(targetSquareID) as HTMLDivElement;
        const contentSquare = isSquareOccupied(targetSquare);

        if (contentSquare === 'blank') {
            LegalSquares.push(targetSquareID);

            // Check for double move only if the pawn hasn't moved yet
            if ((rankNumber === 2 && Direction === 1) || (rankNumber === 7 && Direction === -1)) {
                const doubleTargetRank = rankNumber + 2 * Direction;
                const doubleTargetSquareID = file + doubleTargetRank;
                const doubleTargetSquare = document.getElementById(doubleTargetSquareID) as HTMLDivElement;
                const doubleContentSquare = isSquareOccupied(doubleTargetSquare);

                if (doubleContentSquare === 'blank') {
                    LegalSquares.push(doubleTargetSquareID);
                }
            }
        }
    }
}

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

function moveTo8thRank(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
          rank = startingSquareId.charAt(1),
          rankNumber = parseInt(rank);

    let RankCurrent = rankNumber;

    while(RankCurrent != 8){
        RankCurrent++;
        let SquareCurrentID = file + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);
        
        if(ContentSquare != 'blank' &&  ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if(ContentSquare != 'blank' &&  ContentSquare != Colorpiece) return;
    }
    return;
}

function moveTo1stRank(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
          rank = startingSquareId.charAt(1),
          rankNumber = parseInt(rank);

    let RankCurrent = rankNumber;

    while(RankCurrent != 1){
        RankCurrent--;
        let SquareCurrentID = file + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);
        
        if(ContentSquare != 'blank' &&  ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if(ContentSquare != 'blank' &&  ContentSquare != Colorpiece) return;
    }
    return;
}
function moveToAnAisle(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
          rank = startingSquareId.charAt(1);

    let FileCurrent = file;

    while(FileCurrent != 'a'){
        FileCurrent = String.fromCharCode(FileCurrent.charCodeAt(FileCurrent.length - 1)-1);
        let SquareCurrentID = FileCurrent + rank,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);
        
        if(ContentSquare != 'blank' &&  ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if(ContentSquare != 'blank' &&  ContentSquare != Colorpiece) return;
    }
    return;
}

function moveToHFile(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
          rank = startingSquareId.charAt(1);

    let FileCurrent = file;

    while(FileCurrent != 'h'){
        FileCurrent = String.fromCharCode(FileCurrent.charCodeAt(FileCurrent.length - 1)+1);
        let SquareCurrentID = FileCurrent + rank,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);
        
        if(ContentSquare != 'blank' &&  ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if(ContentSquare != 'blank' &&  ContentSquare != Colorpiece) return;
    }
    return;
}


// Bishop's Move

export const GetBishopsMoves = (startingSquareId: string, Colorpiece: string) => {
    MoveTo8thRankHFile(startingSquareId,Colorpiece);
    MoveTo8thRankAFile(startingSquareId,Colorpiece);
    MoveTo1stRankHFile(startingSquareId,Colorpiece);
    MoveTo1stRankAFile(startingSquareId,Colorpiece);
}

function MoveTo8thRankAFile(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
          rank = startingSquareId.charAt(1),
          rankNumber = parseInt(rank);

    let FileCurrent = file,
        RankCurrent = rankNumber;
    
    while(!(FileCurrent == 'a' || RankCurrent == 8)){
        FileCurrent = String.fromCharCode(
            FileCurrent.charCodeAt(FileCurrent.length-1)-1
        );
        RankCurrent++;

        let SquareCurrentID = FileCurrent + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if(ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if(ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

    }
}
function MoveTo8thRankHFile(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
    rank = startingSquareId.charAt(1),
    rankNumber = parseInt(rank);

let FileCurrent = file,
  RankCurrent = rankNumber;

while(!(FileCurrent == 'h' || RankCurrent == 8)){
  FileCurrent = String.fromCharCode(
      FileCurrent.charCodeAt(FileCurrent.length-1)+1
  );
  RankCurrent++;

  let SquareCurrentID = FileCurrent + RankCurrent,
      SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
      ContentSquare = isSquareOccupied(SquareCurrent);

  if(ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
  LegalSquares.push(SquareCurrentID);
  if(ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

}
}

function MoveTo1stRankHFile(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
    rank = startingSquareId.charAt(1),
    rankNumber = parseInt(rank);

let FileCurrent = file,
  RankCurrent = rankNumber;

while(!(FileCurrent == 'h' || RankCurrent == 1)){
  FileCurrent = String.fromCharCode(
      FileCurrent.charCodeAt(FileCurrent.length-1)+1
  );
  RankCurrent--;

  let SquareCurrentID = FileCurrent + RankCurrent,
      SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
      ContentSquare = isSquareOccupied(SquareCurrent);

  if(ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
  LegalSquares.push(SquareCurrentID);
  if(ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

}
}

function MoveTo1stRankAFile(startingSquareId: string, Colorpiece: string){
    const file = startingSquareId.charAt(0),
    rank = startingSquareId.charAt(1),
    rankNumber = parseInt(rank);

let FileCurrent = file,
  RankCurrent = rankNumber;

while(!(FileCurrent == 'a' || RankCurrent == 1)){
  FileCurrent = String.fromCharCode(
      FileCurrent.charCodeAt(FileCurrent.length-1)-1
  );
  RankCurrent--;

  let SquareCurrentID = FileCurrent + RankCurrent,
      SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
      ContentSquare = isSquareOccupied(SquareCurrent);

  if(ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
  LegalSquares.push(SquareCurrentID);
  if(ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

}
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





