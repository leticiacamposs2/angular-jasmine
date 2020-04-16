import { TokenService } from "./token.service";

describe('Serviço TokenService', () => {
  let token: string;
  let service;

  beforeEach(() => {
    token = 'testetoken';
    service = new TokenService();
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('o serviço deve ser instancioado', () => {
    expect(service).toBeTruthy();
  })

  it('deve guardar um token', () => {
    service.setToken(token);

    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe('testetoken');
  })

  it('deve remover um token', () => {
    service.setToken(token);
    service.removeToken();

    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  })

})
