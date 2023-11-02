import {CloseAside} from './CloseAside';

export function HeaderAside({heading, className}) {
  return (
    <header className={`p-4 flex ${className}`}>
      {heading && <h3>{heading}</h3>}
      <CloseAside className="ml-auto" />
    </header>
  );
}
