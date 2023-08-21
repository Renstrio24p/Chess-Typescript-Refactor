import styles from '../../sass/modules/app.module.scss'

export function isSquareOccupied(square: HTMLDivElement | null) {
    if (square) {
        const pieces = square.getElementsByClassName(`${styles.piece}`);
        if (pieces.length > 0) {
            const Color = pieces[0].getAttribute('color');
            return Color;
        } else {
            return 'blank';
        }
    }
}

export function getAPieceAtSquare(squareID: HTMLDivElement,SquareBoardsArray: any){
    let SquareCurrent = SquareBoardsArray.find((element: any) => element.squareID === squareID)
    const color = SquareCurrent.ColorPiece,
          TypesPiece = SquareCurrent.TypesPiece,
          PiecesID = SquareCurrent.PiecesID;
    
    return {
        ColorPiece: color,
        TypesPiece: TypesPiece,
        PiecesID: PiecesID
    };
}
