# FeiraFácil Alagoas

Protótipo acadêmico frontend para divulgar e gerenciar feirinhas de Alagoas, com foco inicial em Maceió. O projeto demonstra uma jornada completa entre visitante, organizador e administrador sem depender de servidor, banco online ou serviços pagos.

> Projeto acadêmico demonstrativo, sem vínculo com órgãos públicos. Todos os eventos iniciais são fictícios.

## Como executar

Requisitos: Bun 1.2+ ou Node.js 20+.

```bash
bun install
bun run dev
```

A aplicação estará disponível no endereço indicado pelo Vite. Para gerar uma versão de produção:

```bash
bun run build
bun run preview
```

## Tecnologias

- React 19 e TypeScript
- TanStack Start e TanStack Router (roteamento nativo do projeto)
- Vite
- Tailwind CSS 4
- Radix UI / padrões shadcn
- Lucide React
- localStorage para persistência no navegador

## Rotas

### Públicas

- `/` — início
- `/feirinhas` — catálogo com filtros
- `/feirinhas/:id` — detalhes, avaliações e ações
- `/agenda` — lista, calendário e agenda pessoal
- `/mapa` — mapa demonstrativo com marcadores
- `/como-funciona` — apresentação dos perfis e fluxo
- `/creditos` — créditos das imagens
- `/login` — acesso simulado
- `/cadastro` — cadastro local demonstrativo

### Visitante

- `/perfil` — dados e preferências
- `/favoritos` — eventos favoritos

### Organizador

- `/organizador` — visão geral
- `/organizador/eventos` — gerenciamento de eventos
- `/organizador/eventos/novo` — formulário em etapas
- `/organizador/eventos/:id/editar` — edição
- `/organizador/avaliacoes` — avaliações e respostas
- `/organizador/feedback` — feedback da plataforma

### Administrador

- `/admin` — indicadores
- `/admin/eventos` — aprovação, pausa e exclusão
- `/admin/usuarios` — usuários e status
- `/admin/moderacao` — denúncias e decisões
- `/admin/atividades` — histórico e restauração

## Credenciais demonstrativas

| Perfil | E-mail | Senha |
|---|---|---|
| Visitante | `visitante@feirafacil.com` | `123456` |
| Organizador | `organizador@feirafacil.com` | `123456` |
| Administrador | `admin@feirafacil.com` | `123456` |

Também há botões de acesso rápido na tela de login.

## Jornada sugerida para apresentação

1. Entre como **Organizador**.
2. Acesse **Novo evento**, preencha as seis etapas e salve.
3. Abra o site público e localize o evento no catálogo, agenda e mapa.
4. Saia e entre como **Visitante**.
5. Abra o evento, favorite, adicione à agenda, avalie e comente.
6. Saia e volte como **Organizador** para responder à avaliação.
7. Como visitante, denuncie um comentário de outra pessoa.
8. Entre como **Administrador**, abra Moderação e escolha manter, ocultar ou excluir.
9. Volte aos detalhes públicos para verificar o resultado.
10. Em Atividades, use **Restaurar dados de demonstração** para reiniciar a apresentação.

## Funções simuladas

Tudo é salvo em `localStorage` somente neste navegador: sessão, novos usuários, eventos, edições, favoritos, agenda, avaliações, respostas, denúncias, decisões administrativas, feedbacks e destaques patrocinados.

- A autenticação é simulada e não oferece segurança real.
- O mapa usa posições ilustrativas, sem serviço externo pago.
- O destaque patrocinado não cobra e não solicita cartão.
- Visualizações são números demonstrativos.
- Notificações são preferências de interface; nenhuma mensagem é enviada.
- O chat “Fê” usa regras e respostas predefinidas, sem integração com IA.
- Imagens escolhidas no formulário já estão incluídas no projeto; não há envio de arquivo.
- Datas dos eventos iniciais são calculadas em relação à data atual para manter a apresentação vigente.

## Persistência e restauração

Na primeira visita, a aplicação cria os dados de demonstração. Visitas seguintes reutilizam os dados existentes e não sobrescrevem alterações. Para limpar toda a experiência local, entre como administrador e use **Atividades → Restaurar dados de demonstração**.

## Imagens

As imagens do protótipo são ilustrações originais geradas para a aplicação e não representam eventos reais. Consulte `CREDITOS_IMAGENS.md` e a rota `/creditos`.
