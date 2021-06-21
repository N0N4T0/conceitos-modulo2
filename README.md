<h1 align="center">
    GO Barber       
</h1>

<h4 align="center">
    Backend 
</h1>

## Sobre projeto

Projeto para marcar agendamento de atendimentos em barbearias.  

---

## Tecnologias
- **HTML**
- **CSS**
- **DOCKER**
- **GIT**
- **GITHUB**
- **INSOMIA**
- **JAVASCRIPT**
- **POSTGRESQL**
- **TYPESCRIPT**
- **TYPEORM**
- **YARN**

## Instruções
```bash
# Executar o comando abaixo para baixar dependências
$ yarn 

# Certificar que o banco de dados está funcionando

# Verificar o jwt token
```

## JWT TOKEN
- Configurei como padrão 30 dias para expirar, ideal é 1 dia.
- Essa configuração pode ser alterada no arquivo **auth.ts** na pasta **config**

## Gerando um appointment (agendamento) pela rota
- Testar um **GET** ou **POST** em **appointment**
- Caso não consiga acessar terá que ir na rota **sessions** no **insomnia**, criar com o **send** e copiar o **token**

 <img src="https://github.com/N0N4T0/conceitos-modulo2/blob/master/src/assetsGithub/insomnia.jpg" >
 
 - Feito isso ir no local da variável de ambiente do **insomnia** e substituir valor
 
 <img src="https://github.com/N0N4T0/conceitos-modulo2/blob/master/src/assetsGithub/insomnia1.jpg" alt="insomnia2" height="400">
 
 <img src="https://github.com/N0N4T0/conceitos-modulo2/blob/master/src/assetsGithub/insomnia2.jpg" alt="insomnia2">
 
 - Certificar que o **appointments** tenha marcado autenticação tanto para o **GET** como para o **POST**
 <img src="https://github.com/N0N4T0/conceitos-modulo2/blob/master/src/assetsGithub/insomnia3.jpg" alt="insomnia3" width="700" height="400">
 
 
 ## Rotas insomnia



> **Desenvolvido durante GO STACK 2020 da Rocketseat.**

