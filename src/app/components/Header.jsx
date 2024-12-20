import Link from "next/link";
import Dropdown from "./Dropdown";

const ArtistCard = () => {
  return (
    <div className="navbar bg-transparent sticky top-0 z-20">
      <Dropdown />
      <div className="navbar-center">
        <Link href="/">
          <img src="/images/devil.svg" alt="" />
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/tickets">
          <button className="btn btn-ghost" aria-label="Tickets">
            <img
              className="max-w-[30px] max-h-[30px] mr-2"
              src="/images/ticket.svg"
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
