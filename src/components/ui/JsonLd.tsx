// Injeta dados estruturados schema.org no HTML inicial (SSG), legíveis por
// crawlers de IA e buscadores sem execução de JavaScript.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
