/**
 * Helpers
 * Funcionalidades de filtros
 */
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let letras = texto.split(' ');
    letras.forEach((letra, idx) => {
        letras[idx] = letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();
    });
    return letras.join(' ');
});