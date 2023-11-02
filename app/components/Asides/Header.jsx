import {CloseAside} from './CloseAside';

export function HeaderAside({heading, className}) {
  return (
    <header className={`p-4 flex items-center border-b ${className}`}>
      {heading && <h3 className="font-bold">{heading}</h3>}
      <CloseAside className="ml-auto w-12 md:w-auto h-12 block p-2 border border-slate-400 lg:border-slate-200 rounded relative lg:grid lg:grid-cols-[34px_1fr] lg:gap-1 items-center bg-white  lg:hover:bg-yellow-500 group" />
    </header>
  );
}
