# Plataforma Web para Orçamento e Gestão de Instalação de Ar Condicionado

## Descrição

Este projeto é uma plataforma web completa para orçamento e gestão de instalação de ar condicionado em São Sebastião-SP. Ele inclui funcionalidades para cálculo de custos, gerenciamento de mão de obra local, emissão de NF-e/NFS-e e outras funcionalidades úteis.

## Estrutura do Projeto

- **frontend/**: Contém o código do frontend desenvolvido em React.js.
- **backend/**: Contém o código do backend desenvolvido em Node.js com Express.

## Funcionalidades

- Módulo de Orçamento Inteligente
- Emissão de Nota Fiscal Eletrônica (NF-e / NFS-e)
- Painel Administrativo
- Funcionalidades adicionais como blog, calculadora de consumo de energia, área do cliente, etc.

## Tecnologias Utilizadas

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js, Axios (para integração com API de terceiros)
- **Banco de Dados**: (não implementado nesta versão)
- **Hospedagem**: (não especificado nesta versão)

## Como Executar

### Frontend

1. Navegue até a pasta `frontend`.
2. Instale as dependências com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm start`.

### Backend

1. Navegue até a pasta `backend`.
2. Instale as dependências com `npm install`.
3. Inicie o servidor com `node app.js`.

## Configuração de Emissão de Nota Fiscal

1. Atualize o arquivo `backend/config.js` com a URL da API de terceiros e seu token de autenticação.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT.