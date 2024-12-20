import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link href={link} passHref>
      <button className="rounded-full border-1 py-2 px-6 w-44 flex items-center gap-4 justify-center bg-gold">
        <p className="text-2xl text-black font-Gambetta">{text}</p>
      </button>
    </Link>
  );
};

export default Button;