# Relatório de Entrega — FeiraFácil Alagoas

## 1. Identificação do projeto

**Nome:** FeiraFácil Alagoas  
**Natureza:** protótipo acadêmico frontend  
**Área de aplicação:** divulgação, descoberta e gestão demonstrativa de feirinhas locais  
**Recorte geográfico inicial:** Alagoas, com foco em Maceió  
**Público principal:** visitantes, organizadores de feirinhas, expositores representados no conteúdo e administradores da plataforma

> O FeiraFácil Alagoas é um projeto acadêmico demonstrativo, sem vínculo com órgãos públicos, prefeituras, marcas, eventos ou organizações reais. Os eventos e dados iniciais apresentados na aplicação são fictícios.

---

## 2. Resumo executivo

O FeiraFácil Alagoas foi desenvolvido como um protótipo navegável para aproximar o público das feirinhas de artesanato, gastronomia, moda, agricultura familiar, cultura e economia criativa do estado. A solução reúne, em uma única experiência, recursos para descoberta de eventos, organização de passeios, interação com avaliações e administração do catálogo.

O produto entregue não é uma página institucional estática. Trata-se de uma aplicação responsiva, composta por páginas públicas, áreas específicas para visitantes, organizadores e administradores, formulários, filtros e ações que modificam os dados da demonstração. O fluxo principal permite que um organizador cadastre uma feirinha, que ela seja exibida no catálogo, na agenda e no mapa ilustrativo, que um visitante a favorite e avalie e que um administrador acompanhe e modere o conteúdo.

A solução funciona inteiramente no navegador. Sessão, cadastros, eventos, favoritos, agenda, avaliações, comentários, respostas, denúncias, decisões administrativas, feedbacks e destaques patrocinados são armazenados localmente. Essa opção atende ao caráter acadêmico e demonstrativo do projeto, elimina a necessidade de infraestrutura externa e deixa explícito que não há autenticação, cobrança ou moderação real.

---

## 3. Objetivo

### 3.1 Objetivo geral

Desenvolver uma aplicação frontend completa, responsiva e navegável para divulgar e gerenciar feirinhas de Alagoas, permitindo demonstrar uma jornada integrada entre visitantes, organizadores e administradores.

### 3.2 Objetivos específicos

- Facilitar a localização de feirinhas por nome, categoria, município, bairro, data e características de acesso.
- Valorizar manifestações locais de artesanato, gastronomia, moda, agricultura familiar, cultura e economia criativa.
- Permitir que visitantes organizem sua experiência por meio de favoritos e agenda pessoal.
- Possibilitar avaliações, comentários e denúncias em um ambiente demonstrativo.
- Oferecer aos organizadores recursos para cadastrar, editar, acompanhar e destacar eventos.
- Disponibilizar ao administrador controles de aprovação, pausa, exclusão, usuários, moderação e atividades.
- Demonstrar uma arquitetura frontend reutilizável, com navegação consistente e persistência local.
- Entregar documentação suficiente para instalação, apresentação, avaliação acadêmica e continuidade do trabalho.

---

## 4. Justificativa

As feirinhas locais concentram produção cultural, empreendedorismo, gastronomia e convivência comunitária, mas suas informações podem estar dispersas entre redes sociais, mensagens e divulgações isoladas. Essa fragmentação dificulta a descoberta pelo visitante e reduz a capacidade de organização e acompanhamento por parte dos responsáveis pelos eventos.

O FeiraFácil Alagoas responde a esse problema com uma experiência única de consulta e gestão. O recorte alagoano permite contextualizar o protótipo com referências a bairros, municípios, lagoas, bordado filé, feiras e produção criativa regional, sem utilizar símbolos oficiais nem sugerir vínculo governamental.

A escolha por um protótipo frontend com dados locais é adequada à etapa acadêmica porque possibilita validar estrutura, navegação, conteúdo, perfis e regras de interação antes de investir em serviços externos. Também reduz custos e riscos durante a demonstração. Ao mesmo tempo, a solução deixa claras as limitações desse modelo, principalmente em relação à segurança, ao compartilhamento de dados entre dispositivos e à autenticação real.

---

## 5. Fundamentação teórica e literatura

### 5.1 Engenharia de software e prototipação

O projeto foi conduzido como um protótipo funcional e incremental. Essa abordagem permite transformar requisitos em fluxos observáveis, validar a navegação e reduzir incertezas antes da construção de uma solução de produção. A decomposição por áreas públicas, visitante, organizador e administrador segue o princípio de separação de responsabilidades e favorece manutenção e evolução.

Pressman e Maxim destacam o valor do desenvolvimento incremental e da prototipação para compreender requisitos, obter retorno e diminuir riscos. Sommerville também apresenta o desenvolvimento iterativo como estratégia adequada quando os requisitos precisam ser validados ao longo da execução.

### 5.2 Usabilidade e experiência centrada no usuário

A organização das telas considera tarefas reais de cada perfil: descobrir uma feira, planejar uma visita, cadastrar um evento, responder ao público ou moderar uma denúncia. Essa orientação se relaciona aos princípios de projeto centrado no ser humano apresentados pela ISO 9241-210.

Também foram adotados princípios clássicos de usabilidade, como visibilidade do estado do sistema, consistência, prevenção de erros, confirmação de ações destrutivas, possibilidade de desfazer escolhas simples e mensagens claras em estados vazios. Esses critérios se apoiam nas contribuições de Nielsen para interfaces compreensíveis e eficientes.

### 5.3 Acessibilidade digital

O protótipo utiliza rótulos em formulários, contraste visual, foco perceptível para navegação por teclado, hierarquia de títulos e controles com identificação textual ou acessível. A referência principal é a Web Content Accessibility Guidelines — WCAG 2.2. A aplicação busca boas práticas compatíveis com essas diretrizes, mas não foi submetida a uma auditoria formal de conformidade.

### 5.4 Aplicações web baseadas em componentes

O uso de React e TypeScript permite estruturar a interface em componentes reutilizáveis e reduzir inconsistências. O roteamento do projeto é realizado com TanStack Router dentro da arquitetura TanStack Start. O Tailwind CSS organiza os estilos e tokens visuais, enquanto componentes baseados nos padrões shadcn/ui e Radix UI apoiam controles acessíveis e consistentes.

### 5.5 Persistência no navegador

O armazenamento local do navegador foi empregado para manter a demonstração entre atualizações de página. Segundo a documentação da Web Storage API, o `localStorage` mantém pares de chave e valor no navegador, sem funcionar como banco de dados remoto. Por isso, os dados ficam restritos ao navegador utilizado, podem ser apagados pelo usuário e não devem ser tratados como mecanismo seguro de autenticação ou armazenamento sensível.

---

## 6. Metodologia

### 6.1 Natureza do trabalho

O trabalho possui caráter aplicado, exploratório e tecnológico. O resultado é um protótipo funcional destinado à demonstração acadêmica e à validação de uma proposta de produto digital.

### 6.2 Processo adotado

O desenvolvimento foi organizado nas seguintes etapas:

1. **Levantamento e organização dos requisitos:** identificação dos públicos, páginas, ações, restrições técnicas e critérios de demonstração.
2. **Definição da experiência:** separação das jornadas de visitante, organizador e administrador; definição da navegação pública e das áreas por perfil.
3. **Identidade visual:** criação de paleta, tipografia, componentes, logotipo original e ilustrações próprias, sem uso de símbolos públicos como identidade da plataforma.
4. **Modelagem dos dados demonstrativos:** definição de usuários, eventos, categorias, avaliações, denúncias, atividades, favoritos, agenda e feedbacks.
5. **Construção incremental:** implementação da estrutura compartilhada, páginas públicas, autenticação simulada, área do organizador, área administrativa e assistente local.
6. **Persistência e coerência entre telas:** armazenamento no navegador e atualização dos mesmos dados em catálogo, agenda, mapa e painéis.
7. **Documentação:** elaboração de instruções de execução, rotas, credenciais, créditos visuais, escopo, riscos e roteiro de apresentação.
8. **Validação técnica:** correção de tipos, conferência da navegação e preparação da jornada integrada. A verificação formal completa em todos os tamanhos de tela permanece registrada como atividade final pendente.

### 6.3 Critérios de projeto

- Utilizar somente frontend e armazenamento local.
- Não depender de banco de dados, autenticação, pagamento ou mapa pagos.
- Não atribuir eventos fictícios a organizações reais.
- Não inventar endereços exatos de feiras reais.
- Identificar claramente eventos demonstrativos e números simulados.
- Manter as ações principais navegáveis e coerentes entre as páginas.
- Preservar os dados criados pelo usuário até que ele limpe o navegador ou restaure a demonstração.

### 6.4 Tecnologias empregadas

- React 19 e TypeScript.
- TanStack Start e TanStack Router.
- Vite.
- Tailwind CSS 4.
- Radix UI e padrões shadcn/ui.
- Lucide React para ícones.
- `localStorage` para persistência local.

---

## 7. Desenvolvimento da solução

### 7.1 Identidade visual e comunicação

A identidade usa branco como base, azul-marinho em navegação e títulos, laranja em ações principais, areia e azul-claro como apoio e cinza azulado em textos secundários. O logotipo combina uma barraca de feira com um marcador de localização. Foram produzidas ilustrações originais para representar as categorias e a experiência das feirinhas, evitando o uso indevido de fotografias ou marcas de terceiros.

Todas as páginas comunicam o caráter demonstrativo do produto. Os eventos iniciais são marcados como fictícios e o rodapé informa que não existe vínculo com órgãos públicos.

### 7.2 Estrutura pública

A área pública inclui:

- **Início:** apresentação da proposta, busca, filtro por município, categorias, próximos eventos, destaques patrocinados, explicação em três passos e chamada para organizadores.
- **Catálogo de feirinhas:** busca, filtros combinados, ordenação, visualização em grade ou lista, contagem de resultados, limpeza de filtros e estado vazio.
- **Detalhes do evento:** descrição, imagem, data, horário, local demonstrativo, produtos, estrutura, organizador, nota, avaliações, compartilhamento, indicação de rota, favoritos, agenda e eventos relacionados.
- **Agenda:** eventos futuros, filtros, calendário mensal simples e área pessoal.
- **Mapa:** representação ilustrativa com marcadores clicáveis e lista lateral; as posições são indicadas como aproximadas.
- **Como funciona:** explicação das jornadas dos diferentes perfis.
- **Créditos:** identificação das ilustrações e do uso no projeto.
- **Acesso e cadastro:** entrada e criação de perfis demonstrativos.

### 7.3 Jornada do visitante

O visitante pode pesquisar e filtrar eventos, consultar detalhes, favoritar, adicionar itens à agenda, publicar avaliações de uma a cinco estrelas, escrever comentários, editar ou excluir a própria avaliação e denunciar comentários de outras pessoas. O perfil permite atualizar informações pessoais demonstrativas, interesses e preferências de notificação, além de consultar seus totais de favoritos, agenda e avaliações.

Quando uma ação exige identificação e não existe sessão ativa, o visitante é direcionado para a tela de acesso.

### 7.4 Jornada do organizador

O organizador possui um painel com resumo de eventos, datas futuras, favoritos recebidos, média de avaliações e visualizações simuladas. O cadastro de feirinhas foi dividido em seis etapas:

1. Informações.
2. Data e recorrência.
3. Local.
4. Estrutura e contato.
5. Imagem.
6. Revisão.

O formulário valida os campos obrigatórios e permite criar ou editar eventos. A área de gerenciamento também oferece exclusão mediante confirmação e ativação de destaque patrocinado por 7, 15 ou 30 dias. O destaque é apenas uma simulação acadêmica, sem cartão ou cobrança.

O organizador pode acompanhar avaliações, responder aos comentários e enviar feedback sobre a plataforma. O histórico de feedback permanece salvo localmente.

### 7.5 Jornada do administrador

O painel administrativo apresenta indicadores de usuários, organizadores, eventos, pendências, destaques, avaliações, denúncias e atividades. A administração de eventos permite pesquisar, filtrar, visualizar, aprovar, pausar e excluir registros.

A gestão de usuários permite pesquisar, consultar e alterar o status demonstrativo entre ativo e suspenso. Na moderação, o administrador visualiza a denúncia, o comentário e o motivo informado, podendo manter, ocultar ou excluir o conteúdo. As decisões atualizam a exibição pública e são registradas no histórico de atividades.

Também existe uma ação de restauração dos dados iniciais, protegida por confirmação, para preparar uma nova apresentação do protótipo.

### 7.6 Assistente “Fê”

O assistente flutuante usa regras locais predefinidas. Ele responde a perguntas rápidas relacionadas a categorias, eventos gratuitos, fim de semana, municípios, bairros, cadastro, favoritos e anúncios patrocinados. Quando possível, utiliza os dados atuais do protótipo e apresenta links internos. Não há integração com inteligência artificial externa.

### 7.7 Dados demonstrativos

A carga inicial possui dez eventos fictícios com datas futuras calculadas em relação ao dia de uso. Há representação de Maceió e de outros municípios alagoanos, usuários dos três perfis, avaliações, favoritos, agenda, denúncia, atividades e feedback.

Na primeira utilização, os dados iniciais são carregados no navegador. Nas visitas seguintes, as alterações existentes são preservadas e não são substituídas automaticamente.

### 7.8 Estrutura de navegação entregue

Foram implementadas 22 rotas funcionais, além do tratamento de página não encontrada:

**Públicas:** `/`, `/feirinhas`, `/feirinhas/:id`, `/agenda`, `/mapa`, `/como-funciona`, `/creditos`, `/login` e `/cadastro`.

**Visitante:** `/perfil` e `/favoritos`.

**Organizador:** `/organizador`, `/organizador/eventos`, `/organizador/eventos/novo`, `/organizador/eventos/:id/editar`, `/organizador/avaliacoes` e `/organizador/feedback`.

**Administrador:** `/admin`, `/admin/eventos`, `/admin/usuarios`, `/admin/moderacao` e `/admin/atividades`.

---

## 8. Escopo entregue

Estão dentro do escopo e foram contemplados no protótipo:

- Aplicação web responsiva em React e TypeScript.
- Navegação pública e áreas diferenciadas por perfil.
- Catálogo com pesquisa, filtros, ordenação, contagem e estados vazios.
- Detalhes completos dos eventos e ações de compartilhamento e planejamento.
- Agenda geral, calendário mensal e agenda pessoal.
- Mapa ilustrativo sem chave paga.
- Login, sessão e cadastro simulados.
- Perfil editável de visitante.
- Favoritos, avaliações, comentários, respostas e denúncias.
- Cadastro e edição de eventos em etapas.
- Painel do organizador com indicadores e gerenciamento.
- Feedback local do organizador.
- Destaque patrocinado simulado, sem pagamento.
- Painel administrativo de indicadores.
- Administração de eventos e usuários.
- Moderação de denúncias e histórico de atividades.
- Assistente por regras predefinidas.
- Persistência dos dados no navegador.
- Restauração da demonstração mediante confirmação.
- Dez eventos fictícios e dados suficientes para apresentação.
- Ilustrações e identidade visual originais.
- Documentação de instalação, rotas, credenciais, créditos, escopo e riscos.

---

## 9. Itens fora do escopo

Não fazem parte desta entrega:

- Backend próprio ou API de produção.
- Banco de dados online ou sincronização entre dispositivos.
- Autenticação real, verificação de identidade, recuperação de senha ou controle seguro de sessão.
- Segurança adequada para dados pessoais ou informações sensíveis.
- Pagamento, cobrança, cartão, assinatura ou repasse financeiro.
- Envio real de e-mail, SMS ou notificação push.
- Upload de imagens ou arquivos para servidor.
- Geocodificação, cálculo de rotas ou garantia de precisão cartográfica.
- Confirmação de existência, datas ou endereços de eventos reais.
- Inteligência artificial generativa ou atendimento automatizado externo.
- Integração com órgãos públicos, prefeituras, instituições culturais ou redes sociais.
- Publicação e moderação realizadas por uma equipe real.
- Métricas reais de visualização ou análise de audiência.
- Auditoria formal de segurança, privacidade ou conformidade com a WCAG.
- Hospedagem pública definitiva, domínio próprio ou operação comercial.

Esses itens exigiriam uma nova etapa do projeto, com infraestrutura, políticas de segurança e privacidade, regras de negócio definitivas, custos operacionais e validação jurídica.

---

## 10. Stakeholders

| Stakeholder | Interesse | Participação no protótipo | Resultado esperado |
|---|---|---|---|
| Visitantes | Encontrar eventos confiáveis e planejar passeios | Pesquisam, filtram, favoritam, organizam agenda, avaliam e comentam | Descoberta simples e informações organizadas |
| Organizadores | Divulgar eventos e compreender o retorno do público | Cadastram, editam, acompanham avaliações, respondem e simulam destaque | Maior visibilidade e gestão centralizada |
| Expositores locais | Alcançar público e valorizar produtos e serviços | São representados nas categorias, descrições e produtos dos eventos | Divulgação da produção local |
| Administradores | Manter qualidade e segurança do catálogo | Aprovam, pausam, excluem, alteram status e moderam denúncias | Catálogo organizado e conteúdo supervisionado |
| Equipe acadêmica | Demonstrar aplicação prática dos conteúdos estudados | Define requisitos, desenvolve, documenta e testa | Entrega coerente e avaliável |
| Orientadores e avaliadores | Verificar escopo, qualidade e resultados | Percorrem os fluxos e analisam a documentação | Evidências objetivas do trabalho realizado |
| Cliente ou responsável pelo produto | Avaliar viabilidade e orientar evolução | Homologa a demonstração, valida regras e prioriza próximos passos | Base funcional para decisão sobre continuidade |
| Comunidade e produtores culturais | Ter suas atividades representadas com respeito | Público potencial de uma futura versão real | Visibilidade sem associação indevida ou informação falsa |

---

## 11. Gerenciamento de riscos

| Risco | Probabilidade | Impacto | Resposta adotada ou recomendada |
|---|---|---|---|
| Prazo curto | Alta | Alto | Priorizar a jornada principal, reutilizar componentes e dividir a execução em etapas verificáveis |
| Grande quantidade de telas | Alta | Alto | Padronizar navegação, formulários, cartões, painéis e estados de interface |
| Falha ou indisponibilidade do mapa | Média | Médio | Utilizar mapa ilustrativo sem chave externa e informar que as posições são aproximadas |
| Disponibilidade e licença das imagens | Média | Alto | Usar ilustrações originais e registrar cada recurso no documento de créditos |
| Limitações do armazenamento local | Média | Médio | Salvar apenas dados demonstrativos, informar a limitação e oferecer restauração controlada |
| Perda de dados ao limpar o navegador | Média | Médio | Explicar que os dados são locais e manter uma carga inicial restaurável |
| Dados locais corrompidos | Baixa | Médio | Ignorar conteúdo inválido, recuperar o estado inicial e disponibilizar restauração administrativa |
| Erros de navegação ou links quebrados | Média | Alto | Usar rotas tipadas, manter página de não encontrado e testar os links principais |
| Acesso indevido a áreas por perfil | Média | Alto | Verificar o perfil ativo e redirecionar acessos incompatíveis; manter aviso de que a autenticação é simulada |
| Confusão entre simulação e serviço real | Média | Alto | Identificar eventos fictícios, números simulados, mapa ilustrativo e ausência de vínculo público |
| Uso indevido como fonte oficial | Baixa | Alto | Exibir aviso acadêmico em locais visíveis e evitar brasões, bandeiras e identidades institucionais |
| Informações de eventos desatualizadas | Média | Médio | Calcular datas demonstrativas em relação ao dia atual e não apresentar eventos fictícios como reais |
| Requisitos ausentes | Alta | Alto | Registrar os requisitos 6 e 7 como pendentes, sem inferir conteúdo não fornecido |
| Inconsistência entre catálogo, agenda, mapa e painéis | Média | Alto | Manter uma única fonte de dados local compartilhada por todas as telas |
| Falhas de acessibilidade | Média | Alto | Adotar rótulos, contraste, foco visível e navegação por teclado; recomendar auditoria formal futura |
| Exposição de dados ou credenciais | Baixa no protótipo | Alto | Utilizar apenas dados fictícios e proibir o uso desta versão para autenticação ou informações sensíveis |
| Crescimento além da capacidade do navegador | Média em uso real | Alto | Limitar esta versão à demonstração e recomendar banco de dados e serviços seguros para produção |

---

## 12. Descrição dos resultados

### 12.1 Resultados funcionais

O protótipo demonstra uma jornada integrada entre os três perfis. Um evento criado pelo organizador passa a compor a mesma fonte de dados consultada pelo catálogo, agenda e mapa. O visitante pode interagir com esse registro por meio de favoritos e avaliações. O organizador consegue acompanhar o retorno recebido, e o administrador dispõe de ferramentas para gerenciar eventos, usuários e denúncias.

As ações realizadas são mantidas após a atualização da página, desde que o mesmo navegador e o mesmo armazenamento local sejam preservados. A restauração administrativa permite reiniciar a demonstração sem intervenção técnica.

### 12.2 Resultados de conteúdo

A aplicação apresenta dez eventos fictícios distribuídos entre Maceió e outros municípios de Alagoas. As seis categorias previstas estão representadas. Datas e horários seguem apresentação brasileira, e endereços demonstrativos evitam atribuição a feiras reais.

### 12.3 Resultados visuais

Foi construída uma identidade própria e coerente com o contexto regional, sem uso de marca institucional. O sistema visual diferencia ações principais, conteúdos informativos, estados de atenção e áreas administrativas. O menu móvel e a reorganização das grades permitem uso em telas menores, embora a validação formal de toda a jornada em múltiplos dispositivos ainda deva ser concluída antes da homologação definitiva.

### 12.4 Resultados técnicos

A solução utiliza tipagem estática e rotas próprias para cada seção. Os erros TypeScript identificados nos arquivos do assistente, formulário de evento, edição de evento e perfil foram corrigidos com tratamento compatível para propriedades opcionais, preservando o comportamento existente. A documentação do projeto contém instruções de execução, credenciais demonstrativas e roteiro de apresentação.

### 12.5 Limitações dos resultados

Os resultados comprovam o funcionamento conceitual e visual da proposta, mas não comprovam operação em ambiente real. Não foram realizados testes com usuários finais, auditoria de acessibilidade, teste de carga, teste de segurança ou validação jurídica. As métricas, credenciais, eventos e interações são demonstrativos.

---

## 13. Forma de entrega ao cliente final

### 13.1 Pacote de entrega

O cliente final recebe:

1. Código-fonte completo da aplicação.
2. Arquivo `README.md` com instalação, execução, tecnologias, rotas, credenciais e roteiro de demonstração.
3. Arquivo `PLANO_DO_PROJETO.md` com escopo, não escopo, stakeholders, riscos e requisitos pendentes.
4. Este relatório consolidado, `RELATORIO_FINAL.md`.
5. Arquivo `CREDITOS_IMAGENS.md` com a origem e o uso dos recursos visuais.
6. Ilustrações, logotipo e demais recursos necessários para executar a interface.
7. Dados fictícios carregados automaticamente para a apresentação.

### 13.2 Preparação do ambiente

Requisitos mínimos: Bun 1.2 ou Node.js 20 ou superior.

```bash
bun install
bun run dev
```

Para preparar uma versão de produção local:

```bash
bun run build
bun run preview
```

### 13.3 Credenciais demonstrativas

| Perfil | E-mail | Senha |
|---|---|---|
| Visitante | `visitante@feirafacil.com` | `123456` |
| Organizador | `organizador@feirafacil.com` | `123456` |
| Administrador | `admin@feirafacil.com` | `123456` |

Essas credenciais não oferecem segurança e devem ser utilizadas somente na apresentação.

### 13.4 Roteiro de aceite e demonstração

O aceite funcional deve seguir esta sequência:

1. Acessar como organizador.
2. Cadastrar uma nova feirinha e concluir as seis etapas.
3. Confirmar o registro em “Meus eventos”.
4. Verificar a nova feirinha no catálogo, na agenda e no mapa.
5. Sair e acessar como visitante.
6. Localizar o evento, favoritar, adicionar à agenda e publicar uma avaliação com comentário.
7. Retornar como organizador e responder à avaliação.
8. Como visitante, denunciar um comentário de outro usuário.
9. Acessar como administrador e decidir pela manutenção, ocultação ou exclusão do comentário.
10. Voltar à página pública do evento e confirmar o resultado da moderação.
11. Conferir o registro das ações no histórico administrativo.
12. Utilizar “Restaurar dados de demonstração” e confirmar que o cenário inicial foi recuperado.

### 13.5 Critérios de aceite

- Todas as páginas previstas abrem sem links quebrados.
- As áreas de organizador e administrador respeitam o perfil ativo.
- O cadastro e a edição de eventos atualizam as telas relacionadas.
- Favoritos, agenda e avaliações permanecem após atualizar a página.
- Comentários ocultados ou excluídos deixam de aparecer publicamente.
- Ações destrutivas solicitam confirmação.
- Imagens e ícones são exibidos corretamente.
- O aviso de projeto acadêmico e eventos fictícios permanece visível.
- A aplicação pode ser utilizada em celular, tablet e computador sem sobreposição de conteúdo.

### 13.6 Orientações de uso e manutenção

- Não inserir dados pessoais reais.
- Não utilizar as credenciais demonstrativas em produção.
- Não divulgar os eventos fictícios como agenda oficial.
- Antes de cada apresentação, restaurar os dados demonstrativos.
- Para uso real, planejar uma nova fase com banco de dados, autenticação segura, políticas de privacidade, termos de uso, moderação operacional, hospedagem e monitoramento.

### 13.7 Pendência antes da homologação definitiva

O código e a documentação estão preparados para demonstração. A verificação responsiva completa e o teste formal de ponta a ponta de toda a jornada permanecem como última atividade de homologação. Essa etapa deve ser concluída e registrada antes de declarar a versão como definitivamente aceita para apresentação pública.

---

## 14. Requisitos pendentes

Os materiais de referência recebidos apresentaram os requisitos 1 a 5 e 8 a 13. Os requisitos **6 e 7 não foram fornecidos**. Por integridade acadêmica, seu conteúdo não foi presumido nem criado. Eles permanecem pendentes de validação com a equipe responsável e podem alterar o escopo de uma versão futura.

---

## 15. Recomendações para evolução

Caso o protótipo seja aprovado para continuidade, recomenda-se:

1. Validar os requisitos 6 e 7.
2. Realizar testes moderados com visitantes e organizadores reais.
3. Executar auditoria de acessibilidade com testes automáticos e manuais.
4. Definir política de privacidade, termos de uso e processo de moderação.
5. Projetar autenticação segura e banco de dados com controle de acesso.
6. Implementar armazenamento de imagens e tratamento de direitos autorais.
7. Integrar mapas e geocodificação somente após validar custos, licenças e precisão.
8. Definir regras comerciais e jurídicas antes de qualquer destaque pago.
9. Implantar monitoramento, cópias de segurança e registro de incidentes.
10. Substituir gradualmente os dados fictícios por informações verificadas e autorizadas.

---

## 16. Conclusão

O FeiraFácil Alagoas atingiu o objetivo de materializar uma proposta de plataforma para descoberta e gestão de feirinhas em um protótipo frontend amplo e navegável. A entrega cobre a jornada de visitantes, organizadores e administradores, apresenta dados demonstrativos coerentes e reúne os principais recursos necessários para avaliar a utilidade e a viabilidade da ideia.

O produto deve ser entendido como uma demonstração acadêmica, não como serviço pronto para operação pública. Seu principal resultado é permitir que cliente, equipe e avaliadores percorram os fluxos, identifiquem melhorias e tomem decisões sobre uma etapa futura com infraestrutura e validações de produção.

---

## 17. Referências bibliográficas

ISO — INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO 9241-210:2019: Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems**. Geneva: ISO, 2019.

MDN WEB DOCS. **Web Storage API**. Disponível em: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>. Acesso em: 21 set. 2026.

NIELSEN, Jakob. **Usability Engineering**. San Francisco: Morgan Kaufmann, 1993.

PRESSMAN, Roger S.; MAXIM, Bruce R. **Software Engineering: A Practitioner's Approach**. 9. ed. New York: McGraw-Hill Education, 2019.

REACT. **React Documentation**. Disponível em: <https://react.dev/>. Acesso em: 21 set. 2026.

SOMMERVILLE, Ian. **Software Engineering**. 10. ed. Boston: Pearson, 2015.

TANSTACK. **TanStack Router Documentation**. Disponível em: <https://tanstack.com/router/latest>. Acesso em: 21 set. 2026.

TANSTACK. **TanStack Start Documentation**. Disponível em: <https://tanstack.com/start/latest>. Acesso em: 21 set. 2026.

TAILWIND LABS. **Tailwind CSS Documentation**. Disponível em: <https://tailwindcss.com/docs>. Acesso em: 21 set. 2026.

W3C — WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. W3C Recommendation, 5 out. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>. Acesso em: 21 set. 2026.