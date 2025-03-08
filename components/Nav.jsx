'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {
const pathname = usePathname();
console.log(pathname)
    const pathLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Services',
            link: '/services'
        },
        // {
        //     name: 'Resume',
        //     link: '/resume'
        // },
        {
            name: 'Work',
            link: '/work'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

  return (
    <nav className="flex gap-8 items-center">
        {pathLinks.map((link,index)=>{
            return <Link className={`${link.link===pathname&&'border-b-2 border-accent text-accent '} hover:text-accent transition-all ease-in` } href={link.link} key={index}>
                {link.name}
                </Link>
        })}
    </nav>
    
  )
}

export default Nav