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

## Na troca

1. **Substituir o `.htaccess` inteiro** (não colar por cima do antigo). Os blocos
   do WP Rocket, LiteSpeed e WordPress deixam de ter função: nenhuma requisição
   chega mais ao PHP.
2. **Renomear os `.htaccess` dos subdiretórios** (ex.: `wp-content/.htaccess`,
   que o WebP Express cria, e `wp-content/uploads/.htaccess`, se existir) para
   `.htaccess.bak`. No Apache/LiteSpeed, um `.htaccess` com `RewriteEngine On`
   num subdiretório anula as regras da raiz ali dentro: o termo de
   responsabilidade e o certificado Cadastur continuariam servidos pelo
   WordPress (200) em vez de redirecionar, e os demais uploads não dariam 410.
   Testado num Apache local; `RewriteOptions Inherit` não resolve, porque as
   regras herdadas casam o caminho relativo ao subdiretório.
   Para achá-los: `find . -name .htaccess` na raiz do site (File Manager da
   Hostinger, com "mostrar arquivos ocultos").
3. Deixar o `.htaccess` novo **somente leitura** (permissão 444): WP Rocket e
   LiteSpeed Cache reescrevem o arquivo quando rodam.
4. **Limpar o cache** da Hostinger (LiteSpeed/CDN, no hPanel). Senão, páginas já
   em cache continuam sendo servidas no lugar do redirect.

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
