// Lista inline de metadados (nível, distância, saída…). Chips minúsculos.
export function MetaList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wide text-mamut-clay">
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
}
