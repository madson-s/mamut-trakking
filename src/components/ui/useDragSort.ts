'use client';

import { useState, type DragEvent } from 'react';

/** Move um item de posição (não troca com o vizinho). */
export function moveItem<T>(list: readonly T[], from: number, to: number): T[] {
  const next = [...list];
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) return next;
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export type SortEntry<T> = {
  item: T;
  /** Índice do item no array original — use nos handlers de edição/remoção. */
  index: number;
  /** `true` enquanto este item está sendo arrastado (renderize como placeholder). */
  isPlaceholder: boolean;
};

/**
 * Reordenação por arraste com o drag and drop nativo do HTML — sem dependência
 * externa.
 *
 * A lista se reorganiza **durante** o arraste: `entries` devolve a ordem de
 * pré-visualização e marca o item arrastado como `isPlaceholder`, que é o vão
 * mostrando onde ele vai cair. O array real só muda no drop (`onReorder`), então
 * soltar fora da lista ou apertar Esc descarta a prévia e nada é persistido.
 *
 * Só a **alça** recebe `draggable`, não a linha: assim os inputs de dentro
 * continuam permitindo seleção de texto. O fantasma que segue o cursor é a linha
 * inteira, via `setDragImage` no elemento com `data-sortable-item`.
 *
 * Arraste não funciona por teclado — mantenha também botões subir/descer.
 */
export function useDragSort<T>({
  items,
  onReorder,
}: {
  items: readonly T[];
  /** Recebe a lista já reordenada. */
  onReorder: (next: T[]) => void;
}) {
  // Ordem de pré-visualização como índices do array original; null = parado.
  const [order, setOrder] = useState<number[] | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const identity = items.map((_, i) => i);
  // Se a lista mudou de tamanho no meio do arraste, a prévia é descartada.
  const current = order?.length === items.length ? order : identity;

  const reset = () => {
    setOrder(null);
    setDragIndex(null);
  };

  const entries: SortEntry<T>[] = current.map((index) => ({
    item: items[index],
    index,
    isPlaceholder: dragIndex === index,
  }));

  /** Props da alça (o que o usuário agarra). */
  const getHandleProps = (index: number) => ({
    draggable: true,
    onDragStart: (event: DragEvent<HTMLElement>) => {
      setDragIndex(index);
      setOrder(current);
      event.dataTransfer.effectAllowed = 'move';
      // Firefox só inicia o arraste se houver algum dado no dataTransfer.
      event.dataTransfer.setData('text/plain', String(index));

      const row = event.currentTarget.closest('[data-sortable-item]');
      if (row instanceof HTMLElement) {
        const rect = row.getBoundingClientRect();
        event.dataTransfer.setDragImage(row, event.clientX - rect.left, event.clientY - rect.top);
      }
    },
    onDragEnd: reset,
  });

  /** Props da linha (área que recebe o drop). */
  const getItemProps = (index: number) => ({
    'data-sortable-item': '',
    // dragenter dispara uma vez por linha: é onde a prévia se reorganiza.
    onDragEnter: (event: DragEvent<HTMLElement>) => {
      if (dragIndex === null || index === dragIndex) return;
      event.preventDefault();
      const from = current.indexOf(dragIndex);
      const to = current.indexOf(index);
      if (from === -1 || to === -1 || from === to) return;
      setOrder(moveItem(current, from, to));
    },
    // sem preventDefault no dragover o navegador recusa o drop.
    onDragOver: (event: DragEvent<HTMLElement>) => {
      if (dragIndex === null) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
    onDrop: (event: DragEvent<HTMLElement>) => {
      if (dragIndex === null) return;
      event.preventDefault();
      const next = current.map((i) => items[i]);
      reset();
      onReorder(next);
    },
  });

  return {
    /** Itens na ordem de pré-visualização, com o índice original de cada um. */
    entries,
    /** Índice (no array original) do item arrastado. */
    dragIndex,
    isDragging: dragIndex !== null,
    getHandleProps,
    getItemProps,
  };
}

export type DragSort<T> = ReturnType<typeof useDragSort<T>>;
