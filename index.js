// Estamos en un juicio y esperamos la sentencia del Juez para ello tendremos que declarar una variable culpable con el valor 'si', 'no' u 'otro'- y otra variable sentencia asignando un string vacío
var culpable = "otro";
var sentencia = ' ';
// Si culpable es = 'si' -> sentencia será 'a la carcel'
// Si culpable es = 'no' -> sentencia será 'vas a casa'
// En caso de no ser 'si' o 'no' -> sentencia será 'realizar trabajos para la comunidad'


if (culplable === "si") {
  sentencia = "a la carcel";
} else if (culpable === "no") {
  sentencia = "vas a casa";
} else {
  sentencia = "realizar trabajos para la comunidad"
}