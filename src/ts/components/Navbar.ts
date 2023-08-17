import styles from '../../sass/modules/app.module.scss'

export default function Navbar(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
    
        <div>
            <img src='Black-King.png' alt='chess-logo' class='${styles.logo}'/>
            <h1>Chess Typescript</h1>
        </div>
        <div>
            <p>powered by.</p>
            <img src='Typescript.png' alt='typescript image' class='${styles.logo}' />
        </div>

    `)

}