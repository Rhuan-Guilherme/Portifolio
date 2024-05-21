import React from 'react';
import Logo from '../assets/logo.svg?react';
import Menu from '../assets/menu.svg?react';

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  return (
    <>
      <div className="text-xl md:text-2xl font-semibold text-zinc-700 flex items-center gap-2 font-Poppins">
        <Logo />
        <span>
          Rhuan <span className="hidden sm:inline ">Guilherme</span>
        </span>
      </div>

      <nav className="flex gap-1 md:gap-5 font-semibold text-zinc-700 relative transition-all">
        <div
          className={`${
            mobile
              ? 'absolute shadow-bord top-10 right-0 flex flex-col gap-2 w-32 p-1 rounded-md'
              : 'hidden md:flex gap-5'
          }`}
        >
          <a
            className={`p-1 ${
              mobile
                ? 'hover:text-blue-100 hover:bg-blue-600 rounded-md p-1'
                : ''
            }`}
            href="#"
          >
            Home
          </a>
          <a
            className={`p-1 ${
              mobile
                ? 'hover:text-blue-100 hover:bg-blue-600 rounded-md p-1'
                : ''
            }`}
            href="#"
          >
            Sobre mim
          </a>
          <a
            className={`p-1 ${
              mobile
                ? 'hover:text-blue-100 hover:bg-blue-600 rounded-md p-1'
                : ''
            }`}
            href="#"
          >
            Skills
          </a>
          <a
            className={`p-1 ${
              mobile
                ? 'hover:text-blue-100 hover:bg-blue-600 rounded-md p-1'
                : ''
            }`}
            href="#"
          >
            Projetos
          </a>
        </div>
        <button className="bg-blue-600 py-1 px-3 rounded-md text-blue-50 hover:bg-blue-700 transition-all">
          Contato
        </button>

        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden py-1 px-3 rounded-md border border-zinc-300"
        >
          <Menu />
        </button>
      </nav>
    </>
  );
};

export default Header;
