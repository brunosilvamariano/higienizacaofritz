# Publicação e produção

## Metadados dependentes do domínio
Somente após definir a URL pública, inclua:
- `<link rel="canonical" href="https://dominio/...">`
- `og:url` com URL absoluta.
- `og:image` e `twitter:image` com URL absoluta e imagem social dedicada.
- sitemap e `robots.txt` coerentes com o domínio.

Não use URLs fictícias em produção.

## Analytics e anúncios
Google Tag/Analytics, Google Ads e Meta Pixel exigem IDs reais. Não inclua placeholders que gerem requisições inválidas. Se houver rastreamento/cookies não essenciais, implemente consentimento de acordo com a operação do site e a legislação aplicável.

## Cabeçalhos de segurança
Configure no servidor/CDN, testando compatibilidade antes de tornar políticas restritivas:
- `Content-Security-Policy`
- `Strict-Transport-Security` (somente HTTPS)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

CSP não deve ser copiada cegamente: domínios de Analytics, Ads, formulários e integrações precisam ser explicitamente autorizados.

## HTTPS
Produção deve usar HTTPS e redirecionar HTTP para HTTPS.

## Cache
Assets versionados podem receber cache longo. HTML deve ter política que permita atualização segura.

## Formulários
Se um formulário for adicionado, valide no servidor, aplique proteção anti-spam/rate limit e nunca confie apenas na validação do navegador.
