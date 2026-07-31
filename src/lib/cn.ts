type ClassValue = string | false | null | undefined;

// Junta classes ignorando valores falsy. Não faz merge de conflitos: a última
// classe passada (normalmente a prop `className`) vence pela ordem do CSS.
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
