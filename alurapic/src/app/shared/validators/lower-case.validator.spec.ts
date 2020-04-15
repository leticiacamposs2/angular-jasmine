import { isLowerCase } from './lower-case.validator';

describe('A função isLowerCase', () => {
  it('deve confirmar quando recebe um texto em minúsculo', () => {
    const valor = 'mario'; //preparação
    const resultado = isLowerCase(valor); //execução
    expect(resultado).toBeTruthy();  //avaliação do resultado
  })

  it('deve validar quando recebe um texto em maiusculo', () => {
    const valor = 'MARIO';
    expect(isLowerCase(valor)).toBeFalsy();
  })
})
