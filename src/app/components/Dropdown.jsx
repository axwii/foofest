import HamburgerButton from "./Hamburger-button";
import Link from "next/link";

const Dropdown = () => {
  return (
    <div className="navbar-start ml-2">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <HamburgerButton />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black bg-opacity-70 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/lineup">Lineup</Link>
              </li>
              <li>
                <Link href="/ticket">Tickets</Link>
              </li>
              <li>
                <Link href="/">Volunteer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;