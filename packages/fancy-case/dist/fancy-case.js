import{replace as r}from"ramda";const t=/[A-Z]/g,o="A".charCodeAt(0)-"a".charCodeAt(0);function n(r){return function(r,t){return String.fromCharCode(r.charCodeAt(0)+t)}(r,-o)}function e(o){return r(t,n,o)}export{e as lower};
