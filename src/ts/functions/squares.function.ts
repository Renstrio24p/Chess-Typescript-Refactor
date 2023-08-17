import styles from '../../sass/modules/app.module.scss'

export function isSquareOccupied(square: HTMLDivElement | null) {
    if (square) {
        const pieces = square.getElementsByClassName(`${styles.piece}`);
        if (pieces.length > 0) {
            const Color = pieces[0].getAttribute('color');
            return Color;
        }
    }
    return 'blank';
}

export function getAPieceAtSquare(squareID: HTMLDivElement | null, SquareBoardsArray: any) {
   let SquareCurrent = SquareBoardsArray.find((element: any)=>{element.squareID===squareID}),
       color = SquareCurrent.ColorPiece,
       TypePiece = SquareCurrent.TypePiece,
       PiecesID = SquareCurrent.PiecesID;
    
    return {
        ColorPiece:color,
        TypePiece:TypePiece,
        PiecesID:PiecesID,
    }
}
