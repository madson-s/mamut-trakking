export function AssetIcon({
  src,
  className = 'size-5',
  colorClassName = 'bg-brand-strong',
}: {
  src: string;
  className?: string;
  colorClassName?: string;
}) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 ${colorClassName} ${className}`}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    />
  );
}
