import { createAuthHeaderComponent, createNoUserHeader } from '../src/shared/create-header.js';

const test = QUnit.test;

QUnit.module('CREATE-HEADER.TEST.JS');

test('create un-authorized header', assert => {

    //arrange
    const expected = /*html*/`
    <header>
        <h1>MY RIVER DATA</h1>
    </header>
    `;
    //act
    const actual = createNoUserHeader();
    //assert
    assert.htmlEqual(actual, expected);
});

test('create-header.test.js**create auth header component', assert => {

    //arrange
    const user = { displayName: 'Olli Nieminen' };
    const expected = /*html*/`
    <div class="profile">
        <span class="user">Welcome Olli Nieminen</span>
        <button>Sign Out</button>
    </div>
    `;
    //act
    const actual = createAuthHeaderComponent(user);
    //assert
    assert.htmlEqual(actual, expected);
});
