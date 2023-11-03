import {Icons} from '../Icons';

export function HeaderCtas({isLoggedIn, cart, className}) {
  return (
    <div className="lg:row-start-1 lg:col-start-3 hidden lg:grid grid-cols-[1fr_1px_1fr_1px] gap-2">
      <a
        href="#top"
        className="rounded text-white py-1 px-4 hover:bg-yellow-500"
      >
        <span className="text-xs block">tincidunt risus</span>
        <span className="text-bold block">Lorem</span>
      </a>
      <hr className="border-r border-sky-600 h-full"></hr>
      <a
        href="#top"
        className="rounded text-white py-1 px-4 hover:bg-yellow-500"
      >
        <span className="text-xs block">tincidunt risus</span>
        <span className="text-bold flex">
          Lorem{' '}
          <span className="w-6 h-5 inline-block">
            <Icons className="fill-white" icon="arrowdropdown" />
          </span>
        </span>
      </a>
      <hr className="border-r border-sky-600 h-full"></hr>
    </div>
  );
}
