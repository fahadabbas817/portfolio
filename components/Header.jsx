import { Button } from "./ui/button"
import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-8 px-2 xl:py-10 gap-8 flex justify-between items-center">
        <Link href='/'>
          <h1 className="text-4xl font-semibold ">Syedify<span className="text-accent">.</span> </h1>
        </Link>
        <div className="desktopNavigation hidden xl:flex gap-6">
          <Nav />
          <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link>
        </div>
        
        <div className="mobileNavigation xl:hidden flex">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header