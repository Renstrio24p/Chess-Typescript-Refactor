(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=c(a);fetch(a.href,i)}})();const O="_navbar_zgei8_1",G="_piece_zgei8_13",Q="_logo_zgei8_30",U="_container_zgei8_34",j="_chessboard_zgei8_42",J="_square_zgei8_56",V="_white_zgei8_66",X="_black_zgei8_70",Y="_coordinate_zgei8_74",e={navbar:O,piece:G,logo:Q,container:U,chessboard:j,square:J,white:V,black:X,coordinate:Y,"coordinate-right":"_coordinate-right_zgei8_75","white-text":"_white-text_zgei8_93","black-text":"_black-text_zgei8_97"},Z=` <div class='${e.piece} king' color='black'>
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
                            `,k=` <div class='${e.piece} pawn' color='black'>
                            <img src='Black-Pawn.png' alt='Black Pawn' class='${e.piece}' id='pawn'/>
                        </div> `,g=` <div class='${e.piece} pawn' color='white'>
                            <img src='White-Pawn.png' alt='White Pawn' class='${e.piece}' id='pawn'/>
                        </div> 
                            `,ne=t=>{t.innerHTML=`
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
    `},ae=t=>{t.innerHTML=`
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
    `};function ue(){const t=document.getElementById("rank8"),n=document.getElementById("rank7"),c=document.getElementById("rank6"),r=document.getElementById("rank5"),a=document.getElementById("rank4"),i=document.getElementById("rank3"),s=document.getElementById("rank2"),l=document.getElementById("rank1");window.addEventListener("DOMContentLoaded",()=>{}),t&&ne(t),n&&ae(n),c&&re(c),r&&se(r),a&&ce(a),i&&le(i),s&&oe(s),l&&de(l)}function v(t){if(t){const n=t.getElementsByClassName(`${e.piece}`);return n.length>0?n[0].getAttribute("color"):"blank"}}function ve(t,n){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r),i=n==="white"?1:-1;for(let s=-1;s<=1;s+=2){const l=c.charCodeAt(0)+s;if(l>="a".charCodeAt(0)&&l<="h".charCodeAt(0)){const o=String.fromCharCode(l)+(a+i),d=document.getElementById(o);if(d){const h=v(d);h!=="blank"&&h!==n&&u.push(o)}}}}function he(t,n){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r),i=n==="white"?1:-1,s=a+i;if(s>=1&&s<=8){const l=c+s,o=document.getElementById(l);if(v(o)==="blank"&&(u.push(l),a===2&&i===1||a===7&&i===-1)){const h=a+2*i,$=c+h,z=document.getElementById($);v(z)==="blank"&&u.push($)}}}function T(t,n){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let i=c,s=a;for(;!(i=="a"||s==8);){i=String.fromCharCode(i.charCodeAt(i.length-1)-1),s++;let l=i+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==n||(u.push(l),d!="blank"&&d!=n))return}}function x(t,n){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let i=c,s=a;for(;!(i=="h"||s==8);){i=String.fromCharCode(i.charCodeAt(i.length-1)+1),s++;let l=i+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==n||(u.push(l),d!="blank"&&d!=n))return}}function N(t,n){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let i=c,s=a;for(;!(i=="h"||s==1);){i=String.fromCharCode(i.charCodeAt(i.length-1)+1),s--;let l=i+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==n||(u.push(l),d!="blank"&&d!=n))return}}function I(t,n){const c=t.charAt(0),r=t.charAt(1),a=parseInt(r);let i=c,s=a;for(;!(i=="a"||s==1);){i=String.fromCharCode(i.charCodeAt(i.length-1)-1),s--;let l=i+s,o=document.getElementById(l),d=v(o);if(d!="blank"&&d==n||(u.push(l),d!="blank"&&d!=n))return}}function W(t,n){const c=t.charAt(0),r=t.charAt(1);let i=parseInt(r);for(;i!=8;){i++;let s=c+i,l=document.getElementById(s),o=v(l);if(o!="blank"&&o==n||(u.push(s),o!="blank"&&o!=n))return}}function P(t,n){const c=t.charAt(0),r=t.charAt(1);let i=parseInt(r);for(;i!=1;){i--;let s=c+i,l=document.getElementById(s),o=v(l);if(o!="blank"&&o==n||(u.push(s),o!="blank"&&o!=n))return}}function F(t,n){const c=t.charAt(0),r=t.charAt(1);let a=c;for(;a!="a";){a=String.fromCharCode(a.charCodeAt(a.length-1)-1);let i=a+r,s=document.getElementById(i),l=v(s);if(l!="blank"&&l==n||(u.push(i),l!="blank"&&l!=n))return}}function H(t,n){const c=t.charAt(0),r=t.charAt(1);let a=c;for(;a!="h";){a=String.fromCharCode(a.charCodeAt(a.length-1)+1);let i=a+r,s=document.getElementById(i),l=v(s);if(l!="blank"&&l==n||(u.push(i),l!="blank"&&l!=n))return}}const $e=(t,n)=>{ve(t,n),he(t,n)},ke=(t,n)=>{const c=t.charCodeAt(0)-97,r=t.charAt(1),a=parseInt(r);let i=c,s=a;[[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]].forEach(o=>{if(i=c+o[0],s=a+o[1],i>=0&&i<=7&&s>0&&s<=8){let d=String.fromCharCode(i+97)+s,h=document.getElementById(d),$=v(h);if($!="blank"&&$==n)return;u.push(String.fromCharCode(i+97)+s)}})},ge=(t,n)=>{W(t,n),P(t,n),F(t,n),H(t,n)},fe=(t,n)=>{x(t,n),T(t,n),N(t,n),I(t,n)},be=(t,n)=>{x(t,n),T(t,n),N(t,n),I(t,n),W(t,n),P(t,n),F(t,n),H(t,n)},me=(t,n)=>{const c=t.charCodeAt(0)-97,r=t.charAt(1),a=parseInt(r);let i=c,s=a;[[0,1],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[-1,0]].forEach(o=>{if(i=c+o[0],s=a+o[1],i>=0&&i<=7&&s>0&&s<=8){let d=String.fromCharCode(i+97)+s,h=document.getElementById(d),$=v(h);if($!="blank"&&$==n)return;u.push(String.fromCharCode(i+97)+s)}})};function pe(t,n,c){const r=n.getAttribute("color");n.classList.contains("pawn")&&$e(t,r),n.classList.contains("knight")&&ke(t,r),n.classList.contains("rook")&&ge(t,r),n.classList.contains("bishop")&&fe(t,r),n.classList.contains("queen")&&be(t,r),n.classList.contains("king")&&me(t,r),console.log(n.classList.contains("pawn"))}let b=!0;function qe(t){t.preventDefault()}function we(t){var r;const n=t.target,c=n.getAttribute("color");if(b&&c=="white"||!b&&c=="black"){(r=t.dataTransfer)==null||r.setData("text",n.id);const a=n.parentNode.id;pe(a,n)}}function Ce(t){var c;t.preventDefault();let n=(c=t.dataTransfer)==null?void 0:c.getData("text");if(n){const r=document.getElementById(n),a=t.currentTarget,i=a.id;if(v(a)=="blank"&&u.includes(i)){a.appendChild(r),b=!b,u.length=0;return}if(v(a)!="blank"&&u.includes(i)){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(r),b=!b;return}}}let u=[];const m=document.getElementsByClassName(e.square),E=document.getElementsByClassName(e.piece),L=document.getElementsByTagName("img");let p="",q="",w="",M,R,f;function Be(){n(),c();function t(){var r,a;for(let i=0;i<m.length;i++)M=8-Math.floor(i/8),R=String.fromCharCode(97+i%8),f=m[i],f.id=R+M,f.querySelector(`.${e.piece}`)?(p=((r=f.querySelector(`.${e.piece}`))==null?void 0:r.getAttribute("color"))||"",q=((a=f.querySelector(`.${e.piece}`))==null?void 0:a.classList[1])||"",w=f.querySelector(`.${e.piece}`).id||""):(p="blank",q="blank",w="blank"),f.id}function n(){for(let r=0;r<m.length;r++){const a=m[r];a.addEventListener("dragover",qe),a.addEventListener("drop",Ce);let i=8-Math.floor(r/8),s=String.fromCharCode(97+r%8);a.id=s+i}t()}function c(){var r;for(let a=0;a<E.length;a++){const i=E[a];i.addEventListener("dragstart",we),i.setAttribute("draggable","true"),i.id=i.className.split(" ")[1]+((r=i.parentElement)==null?void 0:r.id)}for(let a=0;a<L.length;a++)L[a].setAttribute("draggable","false")}}function ye(t){t.innerHTML=`
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
    `,ue(),Be()}function _e(t){t.innerHTML=`
    
        <div>
            <img src='Black-King.png' alt='chess-logo' class='${e.logo}'/>
            <h1>Chess Typescript</h1>
        </div>
        <div>
            <p>powered by.</p>
            <img src='Typescript.png' alt='typescript image' class='${e.logo}' />
        </div>

    `}function Ae(){const t=document.getElementById("chessboard"),n=document.getElementById("navbar");window.addEventListener("DOMContentLoaded",()=>{}),n&&_e(n),t&&ye(t)}function Se(t){t.innerHTML=`
    <nav id='navbar' class='${e.navbar}'></nav>
        <div class='${e.container}'>
            <div id='chessboard'></div>
        </div>
    `,Ae()}const D=new Set;function Ee(){let t;do t=Math.random().toString(36).substring(2);while(D.has(t));return D.add(t),t}const K=document.querySelector("#app");K.id=Ee();Se(K);
