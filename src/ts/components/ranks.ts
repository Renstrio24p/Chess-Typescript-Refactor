import styles from '../../sass/modules/app.module.scss'
import { Black_Bishop, Black_King, Black_Knight, Black_Pawn, Black_Queen, Black_Rook, White_Bishop, White_King, White_Knight, White_Pawn, White_Queen, White_Rook } from './pieces'

export const Rank8 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.white}'>${Black_Rook}</div>
        <div class='${styles.square} ${styles.black}'>${Black_Knight}</div>
        <div class='${styles.square} ${styles.white}'>${Black_Bishop}</div>
        <div class='${styles.square} ${styles.black}'>${Black_Queen}</div>
        <div class='${styles.square} ${styles.white}'>${Black_King}</div>
        <div class='${styles.square} ${styles.black}'>${Black_Bishop}</div>
        <div class='${styles.square} ${styles.white}'>${Black_Knight}</div>
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles['coordinate-right']} ${styles['white-text']}'>8</div>
            ${Black_Rook}
        </div>
    `)
}

export const Rank7 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.black}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>${Black_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>
            <div class='${styles['coordinate-right']} ${styles['black-text']}'>7</div>
            ${Black_Pawn}
        </div>
    `)
}

export const Rank6 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'>
        <div class='${styles['coordinate-right']} ${styles['white-text']}'>6</div>
        </div>
    `)
}

export const Rank5 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'>
            <div class='${styles['coordinate-right']} ${styles['black-text']}'>5</div>
        </div>
    `)
}

export const Rank4 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles['coordinate-right']} ${styles['white-text']}'>4</div>
        </div>
    `)
}

export const Rank3 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'></div>
        <div class='${styles.square} ${styles.black}'></div>
        <div class='${styles.square} ${styles.white}'>
        <div class='${styles['coordinate-right']} ${styles['black-text']}'>3</div>
        </div>
    `)
}

export const Rank2 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.white}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.white}'>${White_Pawn}</div>
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles['coordinate-right']} ${styles['white-text']}'>2</div>
            ${White_Pawn}
        </div>
    `)
}

export const Rank1 = (DOM: HTMLDivElement) => {
    DOM.innerHTML = (`
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles.coordinate} ${styles['white-text']}'>a</div>
            ${White_Rook}
        </div>
        <div class='${styles.square} ${styles.white}'>
            <div class='${styles.coordinate} ${styles['black-text']}'>b</div>
            ${White_Knight}
        </div>
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles.coordinate} ${styles['white-text']}'>c</div>
            ${White_Bishop}
        </div>
        <div class='${styles.square} ${styles.white}'>
            <div class='${styles.coordinate} ${styles['black-text']}'>d</div>
            ${White_Queen}
        </div>
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles.coordinate} ${styles['white-text']}'>e</div>
            ${White_King}
        </div>
        <div class='${styles.square} ${styles.white}'>
            <div class='${styles.coordinate} ${styles['black-text']}'>f</div>
            ${White_Bishop}
        </div>
        <div class='${styles.square} ${styles.black}'>
            <div class='${styles.coordinate} ${styles['white-text']}'>g</div>
            ${White_Knight}
        </div>
        <div class='${styles.square} ${styles.white}'>
            <div class='${styles.coordinate} ${styles['black-text']}'>h</div>
            <div class='${styles['coordinate-right']} ${styles['black-text']}'>1</div>
            ${White_Rook}
        </div>
    `)
}
