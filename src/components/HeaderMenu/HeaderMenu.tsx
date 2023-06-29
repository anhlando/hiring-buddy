import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  className?: string;
}

const links = [
  {
    href: "/our-story",
    label: "Our Story",
  },
  {
    href: "/our-team",
    label: "Team",
  },
  {
    href: "/client",
    label: "Client",
  },
];

const HeaderMenu: React.FC<Props> = ({ className }) => {
  // isOpen state
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={clsx(className, 'flex justify-center items-center')}>
      <nav className="hidden md:inline-flex h-full">
        {links.map((link) => (
          <a
            key={`${link.href}${link.label}`}
            className="inline-flex justify-center items-center mr-6 text-boulder text-sm"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {!isOpen && <Bars3Icon
        className="md:hidden inline-flex w-10 h-10 cursor-pointer"
        onClick={toggleIsOpen}
      />}

      {isOpen && <XMarkIcon
        className="md:hidden inline-flex w-10 h-10 cursor-pointer"
        onClick={toggleIsOpen}
      />}

      {isOpen && (
        <div
          className="fixed bottom-0 left-0 w-full bg-white z-60 pt-14"
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          {links.map((link, index) => (
            <div className='container' key={`${link.href}${link.label}`}>
              <a
                className={clsx("flex justify-center items-center text-boulder text-center text-xl py-3", index !== links.length - 1 && 'border-b border-gray-200')}
                href={link.href}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
