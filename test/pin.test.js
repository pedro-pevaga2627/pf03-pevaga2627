import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  it('rechaza null y undefined', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });
  it('rechaza el texto vacío', () => {
    expect(esPinValido('')).toBe(false);
  });
  it('acepta longitud 4 y 6', () => {
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('123456')).toBe(true);
  });
  it('rechaza otras longitudes', () => {
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
    expect(esPinValido('1234567')).toBe(false);
  });
  it('rechaza caracteres que no son dígitos', () => {
    expect(esPinValido('12a4')).toBe(false);
    expect(esPinValido('12 4')).toBe(false);
    expect(esPinValido('-123')).toBe(false);
  });
  it('rechaza todos los dígitos iguales', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('888888')).toBe(false);
  });
  it('rechaza valores que no son texto', () => {
    expect(esPinValido(1234)).toBe(false);
  });
});