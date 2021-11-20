import fn from '../src';

describe('api.basic', () => {
  test('test double ${{ env.home }}', () => {
    expect(fn('abc is ${{ env.home }} dir')).toBe('DOUBLE');
  });

  test('test literal ${env.home}', () => {
    expect(fn('abc is ${env.home} dir')).toBe('LITERAL');
  });

  test('test simpe {0} is {person.name}', () => {
    expect(fn('I am {0}, I can live {1} year')).toBe('SIMPLE');
    expect(fn('abc is {person.name}, iabc')).toBe('SIMPLE');
  });

  test('test normal string will get undefined', () => {
    expect(fn('hello world')).toBe(undefined);
  });
});
