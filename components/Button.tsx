import { ButtonProps } from "@types";
import { contact } from "@/constants";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <div className="list-none">
      {contact.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index === contact.length - 1 ? 'mr-0' : 'mr-10'}`}>
          <a href={`#${nav.id}`}>
            <button
              type="button"
              className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer `}
            >
              {nav.title}
            </button>

          </a>
        </li>
      ))}

    </div>

  );
};

export default Button;