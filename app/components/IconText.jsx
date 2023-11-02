export function IconText({text, className}) {
  return <span className={`hidden lg:block text-xs font-bold ${className}`}>{text}</span>;
}
