import { Bars3Icon } from '@heroicons/react/24/outline'
import clsx from 'clsx';

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

      <Bars3Icon
        className="md:hidden inline-flex w-10 h-10"
      />
    </div>
  );
};

export default HeaderMenu;
