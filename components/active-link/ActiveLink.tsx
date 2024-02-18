'use client';

import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
    title: string;
    link: string;
}

export default function ActiveLink({ title, link }: ActiveLinkProps) {
    const pathName = usePathname();
    return (
        <Link href={link} className={`${style.link} ${(pathName === link) && style['active-link']}`}>{title}</Link>
    )
}
