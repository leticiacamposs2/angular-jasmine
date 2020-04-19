# Testes de requisições HTTP
Como fazer o teste de uma requisição sem ter um servidor? O angular pensou nisso e criou o `HttpClientTestingModule` e o `HttpTestingController` que é responsavel por fazer as simulações das requisições do teste unitário.

----

## Atividades

- [x] Serviço de autenticação
- [x] Requisição Http
- [x] Spy do UserService
- [x] Funções assíncronas 
- [x] Requisição no servidor

----

## Aprendizado

- Simular requisições http;
- Criar teste para operações assíncronas com as funções `fakeAsync()` e `tick()`;
- Utilizar Spy para criar dublês de objetos e, assim, isolar o seu teste unitário e avaliar chamadas.
- Para avaliar objeto preferir `toEqual` do que o `toBe`
- Usando o método `expectOne` ele avalia se algum método do teste executou uma chamada http e para capturar esse retorno usa-se o método `flush` 
- O método `httpMock.expectOne()` retorna um objeto válido se as condições de chamada da requisição estiverem de acordo com as condições informadas nos parâmetros
- Criando um dublê de um method de uma classe usando o `spyOn`, neste exemplo: `spyOn(userService, 'setToken').and.returnValue(null)` eu estou clonando o metodo setToken da userService e estou dizendo que o retorno dele vai ser null  
- A requisição HTTP realizada pelo angular é assincrona, o que significa que ele é executado conforme o que o servidor me responde, ou seja ele não é executado assim que é feito o subscribe. Nesse caso entra na seguinte questão, como vou executar simular isso já que não tenho servidor ? O pessoal do angular pensou nisso e criou a função `fakeAsync()`
- Ao usar a função `fakeAsync()` ele cria uma espécie de bolha permitindo que eu consiga simular uma passagem de tempo, através da função `tick()` simulando o tempo de resposta do meu servidor, essa função é diferente do sleep ou seja não vai parar o caso de teste porque ela não vai passar de fato é só uma simulação dentro da função `fakeAsync()`
