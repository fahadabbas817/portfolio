import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa"
import Link from "next/link"
const Socials = () => {
    const socials = [
        {
            url: "https://github.com/fahadabbas817",
            icon:<FaGithub/>
        },
        {
            url: "https://www.instagram.com/fahadabbassyed/",
            icon:<FaInstagram/>
        },
        {
            url: "www.linkedin.com/in/fahadabbas-3042b0212",
            icon:<FaLinkedinIn/>
        },
        {
            url: "https://www.facebook.com/syed.fahadabbas.75",
            icon:<FaFacebook/>
        },
    ]
  return (
    <section className='flex gap-4'>
        {
            socials.map((socials,index)=>{
                return (<Link target="_blank" className="socialIcons h-10 w-10 flex items-center justify-center text-xl border text-accent border-accent rounded-full hover:text-primary hover:bg-accent transition-all duration-500 "  key={index} href={socials.url}  >
                    {socials.icon}
                </Link>)
            })
        }
    </section>
  )
}

export default Socials