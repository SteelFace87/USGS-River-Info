

import { auth } from '../../firebase/firebase.js';

export function createAuthHeaderComponent(user){
    const template = document.createElement('template');
    const html = `
    <div class="profile">
        <span class="user">Welcome ${user.displayName}</span>
        <button>Sign Out</button>
    </div>
    `;
    template.innerHTML = html;
    return template.content;
}

export function createNoUserHeader() {
    const template = document.createElement('template');
    const html = /*html*/`
    <header>
        <h1>MY RIVER DATA</h1>
    </header>
    `;
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function createHeader(options) {
    const dom = createNoUserHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user){ //has user!!
            const userDom = createAuthHeaderComponent(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', ()=> {
                auth.signOut();
                window.location.hash = '';
            });
            header.appendChild(userDom);      
        }
        else {
            window.location = './auth.html' + window.location.hash;
        }
    });

}
