# Testes de serviços
Nessa aula, começamos as criar os testes para as classe de serviços do nosso projeto AluraPic, aprendemos mais sobre as funções beforeEach() e afterEach() do Jasmine e, por fim, estudamos como a classe TestBed pode ajudar a montar objetos complexos para nossos testes.

----

## Atividades

- [x] [Serviço de token](./src/app/core/token/token.service.spec.ts)
- [x] beforeEach e afterEach
- [x] [Serviço de usuário](.src/app/core/user/user.service.spec.ts)
- [x] TestBed 
- [x] Testes do Serviço de Admin

----

## Aprendizado

- Criação de testes para classes de Serviços Angular;
- Utilização dos métodos beforeEach() e afterEach();
- Utilização da classe TestBed para criação de objetos complexos para testes.

<p>Anotações:</p>

- Um serviço angular é uma classe javascript que pode ser injetada em outros serviços ou componentes.
- `afterEach` - após a execução de cada teste essa função é executada, nesse caso usamos para limpar a localStorage.
- `beforeEach` - antes de cada teste essa função é executada.