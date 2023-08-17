(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=c(a);fetch(a.href,n)}})();const P="_navbar_zgei8_1",W="_piece_zgei8_13",F="_logo_zgei8_30",H="_container_zgei8_34",K="_chessboard_zgei8_42",z="_square_zgei8_56",O="_white_zgei8_66",G="_black_zgei8_70",Q="_coordinate_zgei8_74",e={navbar:P,piece:W,logo:F,container:H,chessboard:K,square:z,white:O,black:G,coordinate:Q,"coordinate-right":"_coordinate-right_zgei8_75","white-text":"_white-text_zgei8_93","black-text":"_black-text_zgei8_97"},U=` <div class='${e.piece} king' color='black'>
                            <img src='Black-King.png' alt='Black King' class='${e.piece}' id='king' />
                        </div> `,j=` <div class='${e.piece} king' color='white'>
                            <img src='White-King.png' alt='White King' class='${e.piece}' id='king'/>
                        </div> 
                            `,J=` <div class='${e.piece} queen' color='black'>
                            <img src='Black-Queen.png' alt='Black Queen' class='${e.piece}' id='queen'/>
                        </div> `,V=` <div class='${e.piece} queen' color='white'>
                            <img src='White-Queen.png' alt='White Queen' class='${e.piece}' id='queen'/>
                        </div> 
                            `,m=` <div class='${e.piece} rook' color='black'>
                            <img src='Black-Rook.png' alt='Black Rook' class='${e.piece}' id='rook'/>
                        </div> `,p=` <div class='${e.piece} rook' color='white'>
                            <img src='White-Rook.png' alt='White Rook' class='${e.piece}' id='rook'/>
                        </div> 
                            `,q=` <div class='${e.piece} knight' color='black'>
                            <img src='Black-Knight.png' alt='Black Knight' class='${e.piece}' id='knight'/>
                        </div> `,w=` <div class='${e.piece} knight' color='white'>
                            <img src='White-Knight.png' alt='White Knight' class='${e.piece}' id='knight'/>
                        </div> 
                            `,C=` <div class='${e.piece} bishop' color='black'>
                            <img src='Black-Bishop.png' alt='Black Bishop' class='${e.piece}' id='bishop'/>
                        </div> `,B=` <div class='${e.piece} bishop' color='white'>
                            <img src='White-Bishop.png' alt='White Bishop' class='${e.piece}' id='bishop'/>
                        </div> 
                            `,k=` <div class='${e.piece} pawn' color='black'>
                            <img src='Black-Pawn.png' alt='Black Pawn' class='${e.piece}' id='pawn'/>
                        </div> `,g=` <div class='${e.piece} pawn' color='white'>
                            <img src='White-Pawn.png' alt='White Pawn' class='${e.piece}' id='pawn'/>
                        </div> 
                            `,X=t=>{t.innerHTML=`
        <div class='${e.square} ${e.white}'>${m}</div>
        <div class='${e.square} ${e.black}'>${q}</div>
        <div class='${e.square} ${e.white}'>${C}</div>
        <div class='${e.square} ${e.black}'>${J}</div>
        <div class='${e.square} ${e.white}'>${U}</div>
        <div class='${e.square} ${e.black}'>${C}</div>
        <div class='${e.square} ${e.white}'>${q}</div>
        <div class='${e.square} ${e.black}'>
            <div class='${e["coordinate-right"]} ${e["white-text"]}'>8</div>
            ${m}
        </div>
    `},Y=t=>{t.innerHTML=`
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>
            <div class='${e["coordinate-right"]} ${e["black-text"]}'>7</div>
            ${k}
        </div>
    `},Z=t=>{t.innerHTML=`
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'>
        <div class='${e["coordinate-right"]} ${e["white-text"]}'>6</div>
        </div>
    `},ee=t=>{t.innerHTML=`
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'>
            <div class='${e["coordinate-right"]} ${e["black-text"]}'>5</div>
        </div>
    `},te=t=>{t.innerHTML=`
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'>
            <div class='${e["coordinate-right"]} ${e["white-text"]}'>4</div>
        </div>
    `},ie=t=>{t.innerHTML=`
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'></div>
        <div class='${e.square} ${e.black}'></div>
        <div class='${e.square} ${e.white}'>
        <div class='${e["coordinate-right"]} ${e["black-text"]}'>3</div>
        </div>
    `},ne=t=>{t.innerHTML=`
        <div class='${e.square} ${e.white}'>${g}</div>
        <div class='${e.square} ${e.black}'>${g}</div>
        <div class='${e.square} ${e.white}'>${g}</div>
        <div class='${e.square} ${e.black}'>${g}</div>
        <div class='${e.square} ${e.white}'>${g}</div>
        <div class='${e.square} ${e.black}'>${g}</div>
        <div class='${e.square} ${e.white}'>${g}</div>
        <div class='${e.square} ${e.black}'>
            <div class='${e["coordinate-right"]} ${e["white-text"]}'>2</div>
            ${g}
        </div>
    `},ae=t=>{t.innerHTML=`
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>a</div>
            ${p}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>b</div>
            ${w}
        </div>
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>c</div>
            ${B}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>d</div>
            ${V}
        </div>
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>e</div>
            ${j}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>f</div>
            ${B}
        </div>
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>g</div>
            ${w}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>h</div>
            <div class='${e["coordinate-right"]} ${e["black-text"]}'>1</div>
            ${p}
        </div>
    `};function se(){const t=document.getElementById("rank8"),i=document.getElementById("rank7"),c=document.getElementById("rank6"),r=document.getElementById("rank5"),a=document.getElementById("rank4"),n=document.getElementById("rank3"),s=document.getElementById("rank2"),l=document.getElementById("rank1");window.addEventListener("DOMContentLoaded",()=>{}),t&&X(t),i&&Y(i),c&&Z(c),r&&ee(r),a&&te(a),n&&ie(n),s&&ne(s),l&&ae(l)}function v(t){if(t){const i=t.getElementsByClassName(`${e.piece}`);if(i.length>0)return i[0].getAttribute("color")}return"blank"}const re=(t,i)=>{ce(t,i),le(t,i)};function ce(t,i){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r),n=i==="white"?1:-1;for(let s=-1;s<=1;s+=2){const l=c.charCodeAt(0)+s;if(l>="a".charCodeAt(0)&&l<="h".charCodeAt(0)){const o=String.fromCharCode(l)+(a+n),d=document.getElementById(o);if(d){const h=v(d);h!=="blank"&&h!==i&&u.push(o)}}}}function le(t,i){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r),n=i==="white"?1:-1,s=a+n;if(s>=1&&s<=8){const l=c+s,o=document.getElementById(l);if(v(o)==="blank"&&(u.push(l),a===2&&n===1||a===7&&n===-1)){const h=a+2*n,$=c+h,I=document.getElementById($);v(I)==="blank"&&u.push($)}}}const oe=(t,i)=>{const c=t.charCodeAt(0)-97,r=t.charAt(1),a=parseInt(r);let n=c,s=a;[[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]].forEach(o=>{if(n=c+o[0],s=a+o[1],n>=0&&n<=7&&s>0&&s<=8){let d=String.fromCharCode(n+97)+s,h=document.getElementById(d),$=v(h);if($!="blank"&&$==i)return;u.push(String.fromCharCode(n+97)+s)}})},de=(t,i)=>{S(t,i),E(t,i),D(t,i),L(t,i)};function S(t,i){const c=t.charAt(0),r=t.charAt(1);let n=parseInt(r);for(;n!=8;){n++;let s=c+n,l=document.getElementById(s),o=v(l);if(o!="blank"&&o==i||(u.push(s),o!="blank"&&o!=i))return}}function E(t,i){const c=t.charAt(0),r=t.charAt(1);let n=parseInt(r);for(;n!=1;){n--;let s=c+n,l=document.getElementById(s),o=v(l);if(o!="blank"&&o==i||(u.push(s),o!="blank"&&o!=i))return}}function D(t,i){const c=t.charAt(0),r=t.charAt(1);let a=c;for(;a!="a";){a=String.fromCharCode(a.charCodeAt(a.length-1)-1);let n=a+r,s=document.getElementById(n),l=v(s);if(l!="blank"&&l==i||(u.push(n),l!="blank"&&l!=i))return}}function L(t,i){const c=t.charAt(0),r=t.charAt(1);let a=c;for(;a!="h";){a=String.fromCharCode(a.charCodeAt(a.length-1)+1);let n=a+r,s=document.getElementById(n),l=v(s);if(l!="blank"&&l==i||(u.push(n),l!="blank"&&l!=i))return}}const ue=(t,i)=>{R(t,i),M(t,i),T(t,i),x(t,i)};function M(t,i){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let n=c,s=a;for(;!(n=="a"||s==8);){n=String.fromCharCode(n.charCodeAt(n.length-1)-1),s++;let l=n+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}function R(t,i){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let n=c,s=a;for(;!(n=="h"||s==8);){n=String.fromCharCode(n.charCodeAt(n.length-1)+1),s++;let l=n+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}function T(t,i){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let n=c,s=a;for(;!(n=="h"||s==1);){n=String.fromCharCode(n.charCodeAt(n.length-1)+1),s--;let l=n+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}function x(t,i){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let n=c,s=a;for(;!(n=="a"||s==1);){n=String.fromCharCode(n.charCodeAt(n.length-1)-1),s--;let l=n+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}const ve=(t,i)=>{R(t,i),M(t,i),T(t,i),x(t,i),S(t,i),E(t,i),D(t,i),L(t,i)},he=(t,i)=>{const c=t.charCodeAt(0)-97,r=t.charAt(1),a=parseInt(r);let n=c,s=a;[[0,1],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[-1,0]].forEach(o=>{if(n=c+o[0],s=a+o[1],n>=0&&n<=7&&s>0&&s<=8){let d=String.fromCharCode(n+97)+s,h=document.getElementById(d),$=v(h);if($!="blank"&&$==i)return;u.push(String.fromCharCode(n+97)+s)}})};function $e(t,i){const c=i.getAttribute("color");i.classList.contains("pawn")&&re(t,c),i.classList.contains("knight")&&oe(t,c),i.classList.contains("rook")&&de(t,c),i.classList.contains("bishop")&&ue(t,c),i.classList.contains("queen")&&ve(t,c),i.classList.contains("king")&&he(t,c),console.log(i.classList.contains("pawn"))}let f=!0;function ke(t){t.preventDefault()}function ge(t){var r;const i=t.target,c=i.getAttribute("color");if(f&&c=="white"||!f&&c=="black"){(r=t.dataTransfer)==null||r.setData("text",i.id);const a=i.parentNode.id;$e(a,i)}}function fe(t){var c;t.preventDefault();let i=(c=t.dataTransfer)==null?void 0:c.getData("text");if(i){const r=document.getElementById(i),a=t.currentTarget,n=a.id;if(v(a)=="blank"&&u.includes(n)){a.appendChild(r),f=!f,u.length=0;return}if(v(a)!="blank"&&u.includes(n)){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(r),f=!f;return}}}let u=[];const b=document.getElementsByClassName(`${e.square}`),y=document.getElementsByClassName(`${e.piece}`),_=document.getElementsByTagName("img");function be(){i(),c(),t();function t(){for(let r=0;r<b.length;r++){let a=8-Math.floor(r/8),n=String.fromCharCode(97+r%8),s=b[r];s.id=n+a;let l,o,d;s.querySelector(`.${e.piece}`)?(l=s.querySelector(`.${e.piece}`).getAttribute("color"),o=s.querySelector(`.${e.piece}`).classList[1],d=s.querySelector(`.${e.piece}`).id):(l="blank",o="blank",d="blank"),s.id}}function i(){for(let r=0;r<b.length;r++){const a=b[r];a.addEventListener("dragover",ke),a.addEventListener("drop",fe);let n=8-Math.floor(r/8),s=String.fromCharCode(97+r%8);a.id=s+n}}function c(){for(let r=0;r<y.length;r++){const a=y[r];a.addEventListener("dragstart",ge),a.setAttribute("draggable",!0),a.id=a.className.split(" ")[1]+a.parentElement.id}for(let r=0;r<_.length;r++)_[r].setAttribute("draggable",!1)}}function me(t){t.innerHTML=`
         <div class='${e.chessboard}'>
                <div id='rank8'></div>
                <div id='rank7'></div>
                <div id='rank6'></div>
                <div id='rank5'></div>
                <div id='rank4'></div>
                <div id='rank3'></div>
                <div id='rank2'></div>
                <div id='rank1'></div>
         </div>
    `,se(),be()}function pe(t){t.innerHTML=`
    
        <div>
            <img src='Black-King.png' alt='chess-logo' class='${e.logo}'/>
            <h1>Chess Typescript</h1>
        </div>
        <div>
            <p>powered by.</p>
            <img src='Typescript.png' alt='typescript image' class='${e.logo}' />
        </div>

    `}function qe(){const t=document.getElementById("chessboard"),i=document.getElementById("navbar");window.addEventListener("DOMContentLoaded",()=>{}),i&&pe(i),t&&me(t)}function we(t){t.innerHTML=`
    <nav id='navbar' class='${e.navbar}'></nav>
        <div class='${e.container}'>
            <div id='chessboard'></div>
        </div>
    `,qe()}const A=new Set;function Ce(){let t;do t=Math.random().toString(36).substring(2);while(A.has(t));return A.add(t),t}const N=document.querySelector("#app");N.id=Ce();we(N);
