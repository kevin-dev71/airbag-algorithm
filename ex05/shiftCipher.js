// BUSCAR CUAL ES EL FINAL DE Z Y z para determinar si estamos en minusculas o mayusculas
// si al sumar n se excede de la Z o z hay que restar 26 lo que equivaldria a sumar n de la A-Z

function shiftCipher(str, n) {
  return str.replace(/[a-zA-Z]/g, (c) => {
    return String.fromCharCode(
      (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + n) ? c : c - 26
    );
  });
}

module.exports = shiftCipher;
