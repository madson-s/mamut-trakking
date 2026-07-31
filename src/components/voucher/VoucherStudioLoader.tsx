'use client';

// O estúdio é uma ferramenta 100% client-side: lê o rascunho do localStorage no
// primeiro render e gera o PDF no browser. Carregar com `ssr: false` evita
// hydration mismatch (servidor não tem localStorage) e mantém o bundle do PDF
// fora do render inicial.
import dynamic from 'next/dynamic';
import { Text } from '@/components/ui';

const VoucherStudio = dynamic(() => import('./VoucherStudio'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-svh items-center justify-center bg-surface">
      <Text tone="muted">Carregando o gerador de voucher…</Text>
    </div>
  ),
});

export function VoucherStudioLoader() {
  return <VoucherStudio />;
}
