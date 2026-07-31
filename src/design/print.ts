/**
 * Paleta para saídas que não leem CSS — hoje o PDF do voucher
 * (`@react-pdf/renderer` recebe cores literais, não `var(--token)`).
 *
 * Os valores são o **modo claro/canônico** dos primitivos de `globals.css`:
 * papel é branco, então o PDF nunca usa a variante espelhada do tema escuro.
 * Ao mudar um primitivo no `globals.css`, atualize o espelho aqui.
 */
export const print = {
  /** --gray-1000 · texto principal e regras fortes */
  ink: '#121212',
  /** --gray-900 · texto corrido */
  content: '#1f1f1f',
  /** --gray-600 · apoio e itens riscados */
  muted: '#5c5c5c',
  /** --gray-400 · filete interno de tabela */
  lineThin: '#ababab',
  /** --primary-600 · links */
  brand: '#3e6138',
  /** --primary-700 · rótulos de seção */
  brandStrong: '#2f4c2a',
  /** --success-700 · status concluído/confirmado */
  success: '#15803d',
  /** --error-700 · status pendente/ausente */
  error: '#b91c1c',
  /** --gray-0 */
  paper: '#ffffff',
} as const;
