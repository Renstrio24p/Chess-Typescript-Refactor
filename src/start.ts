import styles from './sass/modules/app.module.scss';
import Render from "./render/render";


export default function Start(start: HTMLDivElement): void {
    start.innerHTML = (`
    <nav id='navbar' class='${styles.navbar}'></nav>
        <div class='${styles.container}'>
            <div id='chessboard'></div>
        </div>
    `)

    Render();
  }
  