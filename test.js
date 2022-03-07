const appSuma = require('./index');
const test = require('ava');

test("Suma", t=>{
    t.is(appSuma.sumar(1,2),3);
});
