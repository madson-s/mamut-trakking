# Migração mamut.agency → mamuttrakking.com

Arquivos para o servidor **antigo** (Hostinger, LiteSpeed). Nada aqui roda no
site novo.

- `htaccess-mamut.agency` — vira o `.htaccess` da raiz do WordPress no dia da
  virada. 301 para cada página legítima (lista branca) e 410 para todo o resto:
  posts de spam da invasão, `wp-admin`, `wp-json`, `xmlrpc.php`, feeds, tags e
  consultas `?p=`/`?s=`/`?rest_route=`.
- `mapeamento-urls.csv` — a mesma tabela em formato de planilha, para conferência.

## Antes de ativar

1. Backup completo do WordPress (arquivos + banco) e cópia do `.htaccess` atual.
2. O site novo já no ar em `mamuttrakking.com` com `SITE_INDEXABLE=true`.
3. Depois da troca, o painel do WordPress fica inacessível pelo domínio (410).
   Para voltar a ele, restaure o `.htaccess` antigo.

## Depois de ativar

- Conferir algumas linhas do CSV no navegador (`curl -I` deve mostrar 301 com
  `location:` no domínio novo, sem segundo salto).
- Search Console: "Mudança de endereço" de `mamut.agency` para
  `mamuttrakking.com`.
- Manter o `.htaccess` ativo por pelo menos um ano.

## Como foi validado

Os 210 endereços do inventário do site antigo (sitemaps + spam encontrado) foram
testados num Apache local com este arquivo, junto com casos de borda (query
string `utm_*`, maiúsculas, sem barra final, `?p=`, `wp-login.php`): 101 do
inventário respondem 301 e os demais 410, idêntico ao esperado. Todos os 81 destinos respondem 200 no site novo, sem
redirect intermediário.
