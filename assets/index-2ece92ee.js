(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=c(n);fetch(n.href,a)}})();const O="_navbar_zgei8_1",G="_piece_zgei8_13",Q="_logo_zgei8_30",U="_container_zgei8_34",j="_chessboard_zgei8_42",J="_square_zgei8_56",V="_white_zgei8_66",X="_black_zgei8_70",Y="_coordinate_zgei8_74",e={navbar:O,piece:G,logo:Q,container:U,chessboard:j,square:J,white:V,black:X,coordinate:Y,"coordinate-right":"_coordinate-right_zgei8_75","white-text":"_white-text_zgei8_93","black-text":"_black-text_zgei8_97"},Z=` <div class='${e.piece} king' color='black'>
                            <img src='Black-King.png' alt='Black King' class='${e.piece}' id='king' />
                        </div> `,ee=` <div class='${e.piece} king' color='white'>
                            <img src='White-King.png' alt='White King' class='${e.piece}' id='king'/>
                        </div> 
                            `,te=` <div class='${e.piece} queen' color='black'>
                            <img src='Black-Queen.png' alt='Black Queen' class='${e.piece}' id='queen'/>
                        </div> `,ie=` <div class='${e.piece} queen' color='white'>
                            <img src='White-Queen.png' alt='White Queen' class='${e.piece}' id='queen'/>
                        </div> 
                            `,C=` <div class='${e.piece} rook' color='black'>
                            <img src='Black-Rook.png' alt='Black Rook' class='${e.piece}' id='rook'/>
                        </div> `,B=` <div class='${e.piece} rook' color='white'>
                            <img src='White-Rook.png' alt='White Rook' class='${e.piece}' id='rook'/>
                        </div> 
                            `,y=` <div class='${e.piece} knight' color='black'>
                            <img src='Black-Knight.png' alt='Black Knight' class='${e.piece}' id='knight'/>
                        </div> `,_=` <div class='${e.piece} knight' color='white'>
                            <img src='White-Knight.png' alt='White Knight' class='${e.piece}' id='knight'/>
                        </div> 
                            `,A=` <div class='${e.piece} bishop' color='black'>
                            <img src='Black-Bishop.png' alt='Black Bishop' class='${e.piece}' id='bishop'/>
                        </div> `,S=` <div class='${e.piece} bishop' color='white'>
                            <img src='White-Bishop.png' alt='White Bishop' class='${e.piece}' id='bishop'/>
                        </div> 
                            `,$=` <div class='${e.piece} pawn' color='black'>
                            <img src='Black-Pawn.png' alt='Black Pawn' class='${e.piece}' id='pawn'/>
                        </div> `,k=` <div class='${e.piece} pawn' color='white'>
                            <img src='White-Pawn.png' alt='White Pawn' class='${e.piece}' id='pawn'/>
                        </div> 
                            `,ae=t=>{t.innerHTML=`
        <div class='${e.square} ${e.white}'>${C}</div>
        <div class='${e.square} ${e.black}'>${y}</div>
        <div class='${e.square} ${e.white}'>${A}</div>
        <div class='${e.square} ${e.black}'>${te}</div>
        <div class='${e.square} ${e.white}'>${Z}</div>
        <div class='${e.square} ${e.black}'>${A}</div>
        <div class='${e.square} ${e.white}'>${y}</div>
        <div class='${e.square} ${e.black}'>
            <div class='${e["coordinate-right"]} ${e["white-text"]}'>8</div>
            ${C}
        </div>
    `},ne=t=>{t.innerHTML=`
        <div class='${e.square} ${e.black}'>${$}</div>
        <div class='${e.square} ${e.white}'>${$}</div>
        <div class='${e.square} ${e.black}'>${$}</div>
        <div class='${e.square} ${e.white}'>${$}</div>
        <div class='${e.square} ${e.black}'>${$}</div>
        <div class='${e.square} ${e.white}'>${$}</div>
        <div class='${e.square} ${e.black}'>${$}</div>
        <div class='${e.square} ${e.white}'>
            <div class='${e["coordinate-right"]} ${e["black-text"]}'>7</div>
            ${$}
        </div>
    `},re=t=>{t.innerHTML=`
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
    `},se=t=>{t.innerHTML=`
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
    `},ce=t=>{t.innerHTML=`
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
    `},le=t=>{t.innerHTML=`
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
    `},oe=t=>{t.innerHTML=`
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>${k}</div>
        <div class='${e.square} ${e.white}'>${k}</div>
        <div class='${e.square} ${e.black}'>
            <div class='${e["coordinate-right"]} ${e["white-text"]}'>2</div>
            ${k}
        </div>
    `},de=t=>{t.innerHTML=`
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>a</div>
            ${B}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>b</div>
            ${_}
        </div>
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>c</div>
            ${S}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>d</div>
            ${ie}
        </div>
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>e</div>
            ${ee}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>f</div>
            ${S}
        </div>
        <div class='${e.square} ${e.black}'>
            <div class='${e.coordinate} ${e["white-text"]}'>g</div>
            ${_}
        </div>
        <div class='${e.square} ${e.white}'>
            <div class='${e.coordinate} ${e["black-text"]}'>h</div>
            <div class='${e["coordinate-right"]} ${e["black-text"]}'>1</div>
            ${B}
        </div>
    `};function ue(){const t=document.getElementById("rank8"),i=document.getElementById("rank7"),c=document.getElementById("rank6"),s=document.getElementById("rank5"),n=document.getElementById("rank4"),a=document.getElementById("rank3"),r=document.getElementById("rank2"),l=document.getElementById("rank1");window.addEventListener("DOMContentLoaded",()=>{}),t&&ae(t),i&&ne(i),c&&re(c),s&&se(s),n&&ce(n),a&&le(a),r&&oe(r),l&&de(l)}function v(t){if(t){const i=t.getElementsByClassName(`${e.piece}`);return i.length>0?i[0].getAttribute("color"):"blank"}}const ve=(t,i,c)=>{he(t,i,c),$e(t,i)};function he(t,i,c){const s=t.charAt(0);t.charAt(1);for(let n=-1;n<=1;n+=2){const a=s.charCodeAt(0)+n;if(a>="a".charCodeAt(0)&&a<="h".charCodeAt(0)&&(c.find(r=>r.squareID===Be),targetSquare)){const r=v(targetSquare);r!=="blank"&&r!==i&&u.push(targetSquareID)}}return u}function $e(t,i){const c=t.charAt(0),s=t.charAt(1),n=parseInt(s),a=i==="white"?1:-1,r=n+a;if(r>=1&&r<=8){const l=c+r,o=document.getElementById(l);if(v(o)==="blank"&&(u.push(l),n===2&&a===1||n===7&&a===-1)){const b=n+2*a,h=c+b,z=document.getElementById(h);v(z)==="blank"&&u.push(h)}}}const ke=(t,i)=>{const c=t.charCodeAt(0)-97,s=t.charAt(1),n=parseInt(s);let a=c,r=n;[[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]].forEach(o=>{if(a=c+o[0],r=n+o[1],a>=0&&a<=7&&r>0&&r<=8){let d=String.fromCharCode(a+97)+r,b=document.getElementById(d),h=v(b);if(h!="blank"&&h==i)return;u.push(String.fromCharCode(a+97)+r)}})},ge=(t,i)=>{T(t,i),x(t,i),N(t,i),I(t,i)};function T(t,i){const c=t.charAt(0),s=t.charAt(1);let a=parseInt(s);for(;a!=8;){a++;let r=c+a,l=document.getElementById(r),o=v(l);if(o!="blank"&&o==i||(u.push(r),o!="blank"&&o!=i))return}}function x(t,i){const c=t.charAt(0),s=t.charAt(1);let a=parseInt(s);for(;a!=1;){a--;let r=c+a,l=document.getElementById(r),o=v(l);if(o!="blank"&&o==i||(u.push(r),o!="blank"&&o!=i))return}}function N(t,i){const c=t.charAt(0),s=t.charAt(1);let n=c;for(;n!="a";){n=String.fromCharCode(n.charCodeAt(n.length-1)-1);let a=n+s,r=document.getElementById(a),l=v(r);if(l!="blank"&&l==i||(u.push(a),l!="blank"&&l!=i))return}}function I(t,i){const c=t.charAt(0),s=t.charAt(1);let n=c;for(;n!="h";){n=String.fromCharCode(n.charCodeAt(n.length-1)+1);let a=n+s,r=document.getElementById(a),l=v(r);if(l!="blank"&&l==i||(u.push(a),l!="blank"&&l!=i))return}}const fe=(t,i)=>{W(t,i),P(t,i),F(t,i),H(t,i)};function P(t,i){const c=t.charAt(0),s=t.charAt(1),n=parseInt(s);let a=c,r=n;for(;!(a=="a"||r==8);){a=String.fromCharCode(a.charCodeAt(a.length-1)-1),r++;let l=a+r,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}function W(t,i){const c=t.charAt(0),s=t.charAt(1),n=parseInt(s);let a=c,r=n;for(;!(a=="h"||r==8);){a=String.fromCharCode(a.charCodeAt(a.length-1)+1),r++;let l=a+r,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}function F(t,i){const c=t.charAt(0),s=t.charAt(1),n=parseInt(s);let a=c,r=n;for(;!(a=="h"||r==1);){a=String.fromCharCode(a.charCodeAt(a.length-1)+1),r--;let l=a+r,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}function H(t,i){const c=t.charAt(0),s=t.charAt(1),n=parseInt(s);let a=c,r=n;for(;!(a=="a"||r==1);){a=String.fromCharCode(a.charCodeAt(a.length-1)-1),r--;let l=a+r,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==i||(u.push(l),d!="blank"&&d!=i))return}}const be=(t,i)=>{W(t,i),P(t,i),F(t,i),H(t,i),T(t,i),x(t,i),N(t,i),I(t,i)},me=(t,i)=>{const c=t.charCodeAt(0)-97,s=t.charAt(1),n=parseInt(s);let a=c,r=n;[[0,1],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[-1,0]].forEach(o=>{if(a=c+o[0],r=n+o[1],a>=0&&a<=7&&r>0&&r<=8){let d=String.fromCharCode(a+97)+r,b=document.getElementById(d),h=v(b);if(h!="blank"&&h==i)return;u.push(String.fromCharCode(a+97)+r)}})};function pe(t,i){const c=i.getAttribute("color");i.classList.contains("pawn")&&ve(t,c),i.classList.contains("knight")&&ke(t,c),i.classList.contains("rook")&&ge(t,c),i.classList.contains("bishop")&&fe(t,c),i.classList.contains("queen")&&be(t,c),i.classList.contains("king")&&me(t,c),console.log(i.classList.contains("pawn"))}let f=!0;function qe(t){t.preventDefault()}function we(t){var s;const i=t.target,c=i.getAttribute("color");if(f&&c=="white"||!f&&c=="black"){(s=t.dataTransfer)==null||s.setData("text",i.id);const n=i.parentNode.id;pe(n,i)}}function Ce(t){var c;t.preventDefault();let i=(c=t.dataTransfer)==null?void 0:c.getData("text");if(i){const s=document.getElementById(i),n=t.currentTarget,a=n.id;if(v(n)=="blank"&&u.includes(a)){n.appendChild(s),f=!f,u.length=0;return}if(v(n)!="blank"&&u.includes(a)){for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(s),f=!f;return}}}let u=[];const m=document.getElementsByClassName(`${e.square}`),E=document.getElementsByClassName(`${e.piece}`),D=document.getElementsByTagName("img");let p="",q="",w="",Be="",L,M,g;function ye(){i(),c(),t();function t(){var s,n;for(let a=0;a<m.length;a++)L=8-Math.floor(a/8),M=String.fromCharCode(97+a%8),g=m[a],g.id=M+L,g.querySelector(`.${e.piece}`)?(p=((s=g.querySelector(`.${e.piece}`))==null?void 0:s.getAttribute("color"))||"",q=((n=g.querySelector(`.${e.piece}`))==null?void 0:n.classList[1])||"",w=g.querySelector(`.${e.piece}`).id||""):(p="blank",q="blank",w="blank"),g.id}function i(){for(let s=0;s<m.length;s++){const n=m[s];n.addEventListener("dragover",qe),n.addEventListener("drop",Ce);let a=8-Math.floor(s/8),r=String.fromCharCode(97+s%8);n.id=r+a}}function c(){for(let s=0;s<E.length;s++){const n=E[s];n.addEventListener("dragstart",we),n.setAttribute("draggable",!0),n.id=n.className.split(" ")[1]+n.parentElement.id}for(let s=0;s<D.length;s++)D[s].setAttribute("draggable",!1)}}function _e(t){t.innerHTML=`
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
    `,ue(),ye()}function Ae(t){t.innerHTML=`
    
        <div>
            <img src='Black-King.png' alt='chess-logo' class='${e.logo}'/>
            <h1>Chess Typescript</h1>
        </div>
        <div>
            <p>powered by.</p>
            <img src='Typescript.png' alt='typescript image' class='${e.logo}' />
        </div>

    `}function Se(){const t=document.getElementById("chessboard"),i=document.getElementById("navbar");window.addEventListener("DOMContentLoaded",()=>{}),i&&Ae(i),t&&_e(t)}function Ee(t){t.innerHTML=`
    <nav id='navbar' class='${e.navbar}'></nav>
        <div class='${e.container}'>
            <div id='chessboard'></div>
        </div>
    `,Se()}const R=new Set;function De(){let t;do t=Math.random().toString(36).substring(2);while(R.has(t));return R.add(t),t}const K=document.querySelector("#app");K.id=De();Ee(K);
