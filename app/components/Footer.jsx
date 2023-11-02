import {useMatches, NavLink} from '@remix-run/react';

export function Footer({}) {
  return (
    <footer className="bg-black w-full px-2 2xl:px-0 py-4">
      <div className="max-w-screen-2xl mx-auto flex w-full">
        <ul className="w-full">
          <li className="text-white">Footer</li>
        </ul>
      </div>
    </footer>
  );
}
