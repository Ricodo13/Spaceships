import { randFloatSpread, mapLinear, lerp } from '../src/math';

describe('Tests des fonctions mathématiques du jeu', () => {

  test('randFloatSpread(1) <= 1 retourne true', () => {
    expect(randFloatSpread(1) <= 1).toBe(true);
  });

  test('randFloatSpread(1) >= -1 retourne true (correction de la coquille du sujet)', () => {
    expect(randFloatSpread(1) >= -1).toBe(true);
  });

  test('mapLinear(1, 2, 3, 4, 5) retourne 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });

  test('mapLinear(1, 20, 3, 40, 5) retourne 0.882352941176471', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471, 15);
  });

  test('lerp(1, 3, 20) retourne 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });

  test('lerp(1.3, -7, 2) retourne -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3, 1);
  });

});