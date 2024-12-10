import Link from "next/link";

const Button = ({ text }) => {
    return (
      <Link href={"program"}>
        <div className="rounded-full border-1 py-2 px-6 w-44 flex items-center gap-4 justify-center bg-gold ">
          <p className="text-2xl text-black font-Gambetta" >
            {text}
          </p>
        </div>
      </Link>
    );
  };

  export default Button;