const LONGITUDES_VALIDAS = [4, 6];

export function esPinValido(pin) {
  if (typeof pin !== 'string') return false;
  if (!LONGITUDES_VALIDAS.includes(pin.length)) return false;
  if (!/^\d+$/.test(pin)) return false;
  return new Set(pin).size > 1;
}
