
// Pawn Moves

import { LegalSquares } from "../moves.function";
import { isSquareOccupied } from "../squares.function";

export function checkDiagonalCaptures(startingSquareId: string, ColorPiece: string) {
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

export function checkMoveForwardMoves(startingSquareId: string, ColorPiece: string) {
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

// Bishop Moves

export function MoveTo8thRankAFile(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    let FileCurrent = file,
        RankCurrent = rankNumber;

    while (!(FileCurrent == 'a' || RankCurrent == 8)) {
        FileCurrent = String.fromCharCode(
            FileCurrent.charCodeAt(FileCurrent.length - 1) - 1
        );
        RankCurrent++;

        let SquareCurrentID = FileCurrent + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

    }
}
export function MoveTo8thRankHFile(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    let FileCurrent = file,
        RankCurrent = rankNumber;

    while (!(FileCurrent == 'h' || RankCurrent == 8)) {
        FileCurrent = String.fromCharCode(
            FileCurrent.charCodeAt(FileCurrent.length - 1) + 1
        );
        RankCurrent++;

        let SquareCurrentID = FileCurrent + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

    }
}

export function MoveTo1stRankHFile(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    let FileCurrent = file,
        RankCurrent = rankNumber;

    while (!(FileCurrent == 'h' || RankCurrent == 1)) {
        FileCurrent = String.fromCharCode(
            FileCurrent.charCodeAt(FileCurrent.length - 1) + 1
        );
        RankCurrent--;

        let SquareCurrentID = FileCurrent + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

    }
}

export function MoveTo1stRankAFile(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    let FileCurrent = file,
        RankCurrent = rankNumber;

    while (!(FileCurrent == 'a' || RankCurrent == 1)) {
        FileCurrent = String.fromCharCode(
            FileCurrent.charCodeAt(FileCurrent.length - 1) - 1
        );
        RankCurrent--;

        let SquareCurrentID = FileCurrent + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;

    }
}


// Rook Moves

export function moveTo8thRank(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    let RankCurrent = rankNumber;

    while (RankCurrent != 8) {
        RankCurrent++;
        let SquareCurrentID = file + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;
    }
    return;
}

export function moveTo1stRank(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1),
        rankNumber = parseInt(rank);

    let RankCurrent = rankNumber;

    while (RankCurrent != 1) {
        RankCurrent--;
        let SquareCurrentID = file + RankCurrent,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;
    }
    return;
}
export function moveToAnAisle(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1);

    let FileCurrent = file;

    while (FileCurrent != 'a') {
        FileCurrent = String.fromCharCode(FileCurrent.charCodeAt(FileCurrent.length - 1) - 1);
        let SquareCurrentID = FileCurrent + rank,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;
    }
    return;
}

export function moveToHFile(startingSquareId: string, Colorpiece: string) {
    const file = startingSquareId.charAt(0),
        rank = startingSquareId.charAt(1);

    let FileCurrent = file;

    while (FileCurrent != 'h') {
        FileCurrent = String.fromCharCode(FileCurrent.charCodeAt(FileCurrent.length - 1) + 1);
        let SquareCurrentID = FileCurrent + rank,
            SquareCurrent = document.getElementById(SquareCurrentID) as HTMLDivElement,
            ContentSquare = isSquareOccupied(SquareCurrent);

        if (ContentSquare != 'blank' && ContentSquare == Colorpiece) return;
        LegalSquares.push(SquareCurrentID);
        if (ContentSquare != 'blank' && ContentSquare != Colorpiece) return;
    }
    return;
}