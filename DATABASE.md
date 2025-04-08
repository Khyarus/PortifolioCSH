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

## O arquivo appsettings.json já contém a configuração padrão:
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

__Update-Database__