# Bastidor · página de vendas

Landing page de suporte e atendimento para infoprodutores.
Feita com Next.js, React, TypeScript e Tailwind CSS, exportada como site estático (rápido e gratuito para hospedar).

## Onde editar cada coisa

| O que | Arquivo |
| --- | --- |
| Nome, WhatsApp, e-mail, Instagram, endereço do site | `src/content/site.ts` |
| Todos os textos das seções (serviços, método, FAQ, sobre…) | `src/content/content.ts` |
| Cases reais (quando tiver) | `src/content/content.ts`, lista `portfolio.cases` |
| Cores e fontes | `src/app/globals.css`, bloco `@theme` |
| Ordem das seções | `src/app/page.tsx` |
| Foto de perfil | coloque `foto.jpg` em `public/` e preencha `ownerPhoto: "/foto.jpg"` em `site.ts` |
| Imagem de compartilhamento (WhatsApp, redes) | `public/og.png` (1200 × 630 px) |
| Ícone da aba | `public/icon.svg` e `public/apple-icon.png` |

**Antes de publicar, troque obrigatoriamente em `site.ts`:** `ownerName`, `ownerInitials` e `whatsapp` (só números, com 55 + DDD).

## Rodar no computador (opcional)

Precisa do Node.js 20 ou superior (nodejs.org).

```bash
npm install
npm run dev      # abre em http://localhost:3000
npm run build    # gera o site final na pasta /out
```

## Publicar grátis na Vercel

1. Crie uma conta gratuita em github.com e outra em vercel.com (entre na Vercel usando o GitHub).
2. No GitHub, crie um repositório novo (ex.: `bastidor`) e envie todos os arquivos desta pasta.
   Sem usar terminal: no repositório vazio, clique em **uploading an existing file** e arraste os arquivos e pastas (menos `node_modules`, `.next` e `out`, se existirem).
3. Na Vercel, clique em **Add New → Project**, escolha o repositório e clique em **Deploy**. A Vercel detecta o Next.js sozinha; não precisa mudar nenhuma configuração.
4. Em cerca de 1 minuto o site fica no ar em um endereço como `bastidor.vercel.app`.
5. Copie esse endereço para `url` em `src/content/site.ts` e envie a alteração. A Vercel publica de novo automaticamente a cada mudança no GitHub.

## Domínio próprio (opcional)

1. Registre o domínio (ex.: no Registro.br, para `.com.br`).
2. Na Vercel: **Project → Settings → Domains → Add** e digite o domínio.
3. A Vercel mostra os registros DNS (tipo A ou CNAME). Cadastre-os no painel do Registro.br, em **DNS**.
4. Depois de propagar (de minutos a algumas horas), atualize `url` em `site.ts`.

## Como funciona o formulário

Não há servidor nem custo: o formulário monta uma mensagem organizada com os dados do visitante, abre o WhatsApp com ela pronta e leva para a página `/obrigado`. A mensagem só chega quando o visitante toca em enviar no WhatsApp.
