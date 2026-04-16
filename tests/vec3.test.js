import {
  vec3_create,
  vec3_add,
  vec3_sub,
  vec3_clone,
  vec3_equals
} from '../src/vec3';

describe('Tests de la gestion des vecteurs 3D (vec3.js)', () => {

  test('vec3_create initialise un vecteur avec les bonnes valeurs', () => {
    const v1 = vec3_create();
    expect(v1).toEqual({ x: 0, y: 0, z: 0 });

    const v2 = vec3_create(1, 2, 3);
    expect(v2).toEqual({ x: 1, y: 2, z: 3 });
  });

  test('vec3_add additionne deux vecteurs et modifie le premier', () => {
    const a = vec3_create(1, 2, 3);
    const b = vec3_create(4, 5, 6);
    vec3_add(a, b);
    expect(a).toEqual({ x: 5, y: 7, z: 9 });
  });

  test('vec3_sub soustrait deux vecteurs correctement', () => {
    const a = vec3_create(5, 5, 5);
    const b = vec3_create(1, 2, 3);
    vec3_sub(a, b);
    
    expect(a).toEqual({ x: 4, y: 3, z: 2 });
  });

  test('vec3_clone crée une copie exacte mais indépendante', () => {
    const original = vec3_create(10, 20, 30);
    const copie = vec3_clone(original);

    expect(copie).toEqual(original);

    expect(copie).not.toBe(original);
  });

  test('vec3_equals vérifie correctement l\'égalité de deux vecteurs', () => {
    const a = vec3_create(1, 1, 1);
    const b = vec3_create(1, 1, 1);
    const c = vec3_create(2, 2, 2);

    expect(vec3_equals(a, b)).toBe(true);
    
    expect(vec3_equals(a, c)).toBe(false);
  });

});