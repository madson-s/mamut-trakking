'use client';

// Preview ao vivo do PDF. Carregado apenas no cliente (via next/dynamic
// ssr:false no Studio), então PDFViewer nunca roda no servidor.
//
// memo() é essencial: o PDFViewer regenera o PDF sempre que seu `children`
// muda de referência, e buildVoucherDocument() cria um elemento novo a cada
// render. Sem memo, qualquer re-render do pai (a cada tecla) regeneraria o PDF.
// Com memo, só re-renderiza quando `data` muda de referência — que, graças ao
// debounce no Studio, só ocorre quando o usuário para de digitar.
import { memo } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { buildVoucherDocument } from './VoucherDocument';
import type { VoucherData } from '@/lib/voucher';

function VoucherPreview({ data }: { data: VoucherData }) {
  return (
    <PDFViewer showToolbar style={{ width: '100%', height: '100%', border: 'none' }}>
      {buildVoucherDocument(data)}
    </PDFViewer>
  );
}

export default memo(VoucherPreview);
