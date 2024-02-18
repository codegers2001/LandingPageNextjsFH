import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import ActiveLink from '../active-link/ActiveLink';

const navItems = [
    { title: 'About', link: '/about' },
    { title: 'Princing', link: '/princing' },
    { title: 'Contact', link: '/contact' },
];

export default function NavBar() {
    return (
        <nav className='p-5 bg-gray-800 text-white'>
            <div className="container flex flex-col md:flex-row md:justify-between items-center ">
                <div>
                    <Link href="/" className="flex items-center gap-2 hover:text-cyan-400 hover:cursor-pointer transition-all">
                        <HomeIcon size={24} />
                        <span className='font-bold text-cyan-500 text-xl'>CodegersTec</span>
                    </Link>
                </div>

                <div className='flex md:justify-between gap-4 items-center mt-4 md:mt-0'>
                    {
                        navItems.map((item, index) => (
                            <ActiveLink key={index} title={item.title} link={item.link} />
                        ))
                    }
                </div>
            </div>
        </nav>

    )
}

