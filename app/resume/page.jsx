import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {SiTailwindcss,SiNextdotjs} from "react-icons/si"
const page = () => {

  const about = {
    title: "About me",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam   sunt explicabo inventore.",
    info: [
    {
    fieldName: "Name",
    fieldValue: "Fahad Abbas"
    },
    {
    fieldName: "Phone",
    fieldValue: "+92 318 6333577"
    },
    {
    fieldName: "Email",
    fieldValue: "fahadabbas817@gmail.com"
    },
    {
    fieldName: "Experience",
    fieldValue: "2+ Years"
    },
    {
    fieldName: "Freelance",
    fieldValue: "Available"
    },
    {
    fieldName: "Name",
    fieldValue: "Luke Coleman"
    },
  ]
    };

  return <div>Resume</div>;
};

export default page;
