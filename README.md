# PortfolioCSH - Portfólio Pessoal em ASP.NET Core
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-5.2.8-blue?logo=.net)

![Demonstração do Site](./Site.gif)


Um projeto de portfólio profissional desenvolvido em ASP.NET Core para demonstrar habilidades, projetos e informações de contato.

## 📂 Estrutura do Projeto
```
PortfolioCSH/
├── wwwroot/
│ ├── css/ # Folhas de estilo
│ ├── js/ # Scripts JavaScript
│ └── lib/ # Bibliotecas externas
├── Pages/ # Páginas Razor
│ ├── Shared/ # Layouts compartilhados
│ ├── Contato.cshtml # Página de contato
│ └── Projetos.cshtml # Galeria de projetos
├── appsettings.json # Configurações
└── Program.cs # Ponto de entrada

```

## ✨ Funcionalidades

- **Páginas Responsivas**
  - Home (Index)
  - Sobre Mim
  - Portfólio de Projetos
  - Formulário de Contato
  - Política de Privacidade

- **Componentes Reutilizáveis**
  - Layout principal
  - Scripts de validação
  - Estilos compartilhados

## 🛠️ Tecnologias

- ASP.NET Core 6.0
- Razor Pages
- HTML5 Semântico
- CSS3 Flexbox/Grid
- JavaScript ES6+
- Bootstrap 5 (presumido)

## 🔐 Funcionalidades de Autenticação Adicionadas 

##### Foi implementado um sistema completo de autenticação de usuários com:
## __Registro de novos usuários__

Validação de campos

Criptografia de senhas (usando ASP.NET Core Identity)

Confirmação via e-mail (opcional)

## Login seguro

Autenticação baseada em cookies

Proteção contra ataques de força bruta

Gerenciamento de sessões

## Banco de Dados

Armazenamento seguro de credenciais

Hash de senhas usando algoritmos PBKDF2

Migrações para atualização do schema

![Demonstração do Site](./Site2.gif)
## 📦 Dependências Adicionais

    Microsoft.AspNetCore.Identity.EntityFrameworkCore

    Microsoft.EntityFrameworkCore.SqlServer

    Microsoft.AspNetCore.Identity.UI

## ⚙️ Configuração

As configurações de conexão com o banco de dados e políticas de senha podem ser ajustadas no arquivo appsettings.json.
json
Copy
```
"Identity": {
  "Password": {
    "RequiredLength": 8,
    "RequireDigit": true,
    "RequireLowercase": true,
    "RequireUppercase": true,
    "RequireNonAlphanumeric": true
  }
}
``` 
Para testar localmente, execute as migrações do Entity Framework Core:
bash

dotnet ef database update




# Configuração do Banco de Dados - PortfolioCSH

Este documento fornece instruções completas para replicar o ambiente de banco de dados necessário para executar o projeto PortfolioCSH localmente.

## 📋 Pré-requisitos

- [Visual Studio 2022](https://visualstudio.microsoft.com/) (ou versão mais recente)
- [.NET 6.0 SDK](https://dotnet.microsoft.com/download) ou superior
- SQL Server Express LocalDB (incluído no Visual Studio)
- Git (opcional)

## 🚀 Configuração Inicial

### 1. Clone o repositório (se aplicável)
```bash
git clone [URL_DO_REPOSITORIO]
cd PortfolioCSH
```

2. Verifique a string de conexão

O arquivo appsettings.json já contém a configuração padrão:
```
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=PortfolioDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```


## 🛠 Configuração do Banco de Dados
### Método 1: Via Visual Studio (recomendado)

Abra o projeto no Visual Studio

Abra o Console do Gerenciador de Pacotes:

Menu: Tools > NuGet Package Manager > Package Manager Console

Execute o comando:
powershell
Copy
Update-Database
