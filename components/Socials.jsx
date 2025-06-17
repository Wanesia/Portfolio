import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/wanesa-wintmiller/",
  },
  {
    icon: <FaGithubSquare />,
    path: "https://github.com/Wanesia",
  },
];
const Socials = () => {
  return (
    <div className="flex gap-8 mt-5">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[42px] cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
