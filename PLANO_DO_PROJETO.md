# Plano do Projeto — FeiraFácil Alagoas

## Escopo

### Objetivo

Criar um protótipo frontend navegável para descoberta e gestão de feirinhas de Alagoas, com foco inicial em Maceió. A solução conecta visitantes a experiências locais e oferece aos organizadores e administradores fluxos demonstrativos completos.

### Público

- Visitantes interessados em artesanato, gastronomia, moda, agricultura familiar, cultura e economia criativa.
- Organizadores de feirinhas e expositores locais.
- Administradores responsáveis por curadoria e moderação.
- Equipe acadêmica e avaliadores do projeto.

### Páginas e requisitos atendidos

O escopo inclui início, catálogo pesquisável, detalhes, agenda, mapa ilustrativo, acesso e cadastro simulados, perfil, favoritos, painel do organizador, formulário de eventos em etapas, avaliações, feedback, destaque patrocinado simulado e painel administrativo com eventos, usuários, moderação e atividades.

### Fluxos

1. Organizador entra, cadastra ou edita uma feirinha e acompanha favoritos e avaliações.
2. O evento aprovado aparece no catálogo, agenda e mapa.
3. Visitante pesquisa, filtra, favorita, adiciona à agenda, avalia, comenta e denuncia conteúdo.
4. Organizador responde às avaliações.
5. Administrador aprova ou pausa eventos, altera status de usuários e modera denúncias.
6. Administrador restaura os dados iniciais para uma nova apresentação.

### Entregas

- Aplicação responsiva em React e TypeScript.
- Rotas e navegação completas.
- Estado persistido localmente.
- Oito ou mais eventos fictícios com identidade alagoana.
- Assistente por regras predefinidas.
- Documentação, plano e créditos.

## Não escopo

- Backend ou API própria.
- Banco de dados online.
- Autenticação real, validação de identidade ou recuperação de senha.
- Pagamento, cobrança, cartão ou assinatura real.
- Notificações por e-mail, SMS ou push.
- Upload de arquivos para servidor.
- Geocodificação e rotas reais de deslocamento.
- Mapa com precisão garantida.
- Integração com inteligência artificial; o assistente usa regras locais.
- Integração com órgãos públicos, prefeituras ou instituições culturais.
- Publicação e moderação por equipe real.

## Stakeholders

| Stakeholder | Interesse | Participação |
|---|---|---|
| Visitantes | Descobrir eventos confiáveis e planejar passeios | Buscam, filtram, favoritam, avaliam e comentam |
| Organizadores | Divulgar eventos e compreender o retorno do público | Cadastram, editam, respondem e simulam destaque |
| Expositores | Alcançar público e valorizar produtos locais | Representados nos conteúdos e produtos dos eventos |
| Administradores | Manter qualidade e segurança do catálogo | Aprovam, pausam, excluem e moderam |
| Equipe do projeto | Entregar e evoluir o protótipo | Pesquisa, design, desenvolvimento e testes |
| Avaliador | Verificar requisitos e coerência da solução | Percorre a jornada demonstrativa e avalia documentação |

## Gerenciamento de riscos

| Risco | Probabilidade | Impacto | Resposta |
|---|---|---|---|
| Prazo curto | Alta | Alto | Priorizar jornada principal e reutilizar componentes |
| Grande quantidade de telas | Alta | Alto | Padronizar layouts e validar cada grupo de rotas |
| Falha no mapa | Média | Médio | Usar mapa ilustrativo sem chave como alternativa estável |
| Disponibilidade e licença das imagens | Média | Alto | Usar ilustrações originais e registrar créditos |
| Limitações do armazenamento local | Média | Médio | Manter imagens no pacote e salvar somente dados textuais |
| Erros de navegação | Média | Alto | Usar rotas tipadas, página 404 e testar links principais |
| Requisitos faltantes | Alta | Alto | Registrar itens 6 e 7 como pendentes de validação |
| Dados locais corrompidos | Baixa | Médio | Recuperar dados iniciais e oferecer restauração administrativa |
| Uso indevido como fonte oficial | Baixa | Alto | Exibir avisos de projeto acadêmico e eventos fictícios |
| Perda de dados ao limpar o navegador | Média | Médio | Explicar a limitação no cadastro e no README |

## Requisitos pendentes

Os materiais recebidos apresentam os requisitos 1 a 5 e 8 a 13. Os requisitos **6 e 7 não foram fornecidos** e permanecem pendentes de validação com a equipe responsável. Seu conteúdo não foi inferido nem inventado neste documento.
