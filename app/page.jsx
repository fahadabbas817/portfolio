
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "@/components/Socials";
import ProfilePicture from "@/components/ProfilePicture";
import Stats from "@/components/Stats";
const page = () => {
 
  return (
    <section className="h-full w-full">
      <div className="container mx-auto px-4 h-full flex-col xl:flex-row flex gap-10">
        <div className="text text-center xl:text-left order-2 xl:order-none">
          <h2 className="text-lg">Software Engineer</h2>
          <div className="main-text mb-6">
            <h1>
              Hello I'm <br />
              <span className="text-accent"> Syed Fahad </span>
            </h1>
          <p className="text-xs max-w-[500px]  mt-2 text-left  text-white/80">
          I'm a MERN Stack Developer with a passion for building sleek, responsive web apps. I specialize in crafting user-friendly interfaces and scalable backend solutions. Recently, I’ve been exploring generative AI and web extension development. Let’s turn ideas into impactful digital experiences!
          </p>
          </div>
          <div className="social-buttons text-center flex flex-col xl:flex-row gap-4  items-center" > 
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 mb-2 xl:mb-0 text-accent p-6 text-xl rounded-full px-8 transition-all ease-in"
            >
              <span>Download CV</span>
              <FaDownload />
            </Button>
          <Socials />
          </div>
        </div>

        <div className="img mx-auto  order-1 xl:order-none xl:mb-0">
          <ProfilePicture/>
        </div>
      </div>
        <div className="stats mt-10">
          <Stats/>
        </div>
    </section>
  );
};

export default page;
