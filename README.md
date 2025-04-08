# PortfolioCSH - Portfólio Profissional

![Banner do Projeto](Site.gif)

Um portfólio profissional desenvolvido em ASP.NET Core com sistema de autenticação e gerenciamento de projetos.

## ✨ Funcionalidades

- Sistema completo de cadastro e login
- Páginas dinâmicas para projetos profissionais
- Área de contato integrada
- Perfil personalizável para usuários
- Design responsivo e moderno

## 🚀 Começando

### Pré-requisitos
- .NET 6.0 SDK
- SQL Server (LocalDB incluso no Visual Studio)

### Instalação
1. Clone o repositório
2. Configure o banco de dados (veja [DATABASE.md](DATABASE.md))
3. Execute `dotnet run`

## 📂 Estrutura do Projeto
```
PortfolioCSH/
├── Data/
│   └── ApplicationDbContext.cs
├── Migrations/
│   ├── 20250403200455_InitialCreate.cs
│   └── ApplicationDbContextModelSnapshot.cs
├── Pages/
│   ├── Shared/
│   │   ├── Layout.cshtml
│   │   ├── Layout.cshtml.css
│   │   ├── ValidationScriptsPartial.cshtml
│   │   ├── ViewImports.cshtml
│   │   └── ViewStart.cshtml
│   ├── Contato.cshtml
│   ├── Contato.cshtml.cs
│   ├── Error.cshtml
│   ├── Error.cshtml.cs
│   ├── Index.cshtml
│   ├── Index.cshtml.cs
│   ├── Login.cshtml
│   ├── Login.cshtml.cs
│   ├── Logout.cshtml
│   ├── Logout.cshtml.cs
│   ├── Privacy.cshtml
│   ├── Privacy.cshtml.cs
│   ├── Profile.cshtml
│   ├── Profile.cshtml.cs
│   ├── Projetos.cshtml
│   ├── Projetos.cshtml.cs
│   ├── Register.cshtml
│   ├── Register.cshtml.cs
│   ├── Sobre.cshtml
│   └── Sobre.cshtml.cs
├── Properties/
│   └── launchSettings.json
├── wwwroot/
│   ├── css/
│   │   └── site.css
│   ├── js/
│   │   └── site.js
│   ├── lib/
│   └── favicon.ico
├── .gitattributes
├── .gitignore
├── appsettings.json
├── appsettings.Development.json
├── GlobalSuppressions.cs
├── Program.cs
├── README.md
├── Site.gif
└── Site2.gif
```


## 🤝 Contribuição
Leia nosso [CONTRIBUTING.md](CONTRIBUTING.md) para saber como contribuir.

## 📄 Licença
Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

## 📧 Contato
Seu Nome - 06935548942@gmail.com