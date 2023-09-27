import Link from "next/link"
import Image from "next/image"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projects',
        href: '/projects'
    }
]

export const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <Image
                        width={58}
                        height={49}
                        src="/images/logo.svg"
                        alt="Logo GB"
                        />
                </Link>

                <nav>
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label}/>
                    ))}
                </nav>
            </div>
        </header>
    )
}