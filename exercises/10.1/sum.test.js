const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// Exercícios 
// Teste se o retorno de sum(4, 5) é 9 

describe('sum', () => {
  test ('Verifica se os parâetros se somam', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });
})

// Teste se os parâmetros são números 
it('Apresenta um erro quando uma string for passada como parâmetro ', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow(/os parâmetros devem ser números/);
});
 