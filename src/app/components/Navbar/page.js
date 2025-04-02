import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="py-3 d-flex justify-content-between align-items-center px-4">
        <h4 className="text-white m-0">TANN TRIM</h4>

        <ul className="list-unstyled d-flex gap-4 m-0 p-0">
          <li>
            <Image
              src="/images/Frame 51.png"
              alt="Frame 51"
              width={25}
              height={25}
            />
          </li>
          <li>
            <Image
              src="/images/Frame 52.png"
              alt="Frame 52"
              width={25}
              height={25}
            />
          </li>
          <li>
            <Image
              src="/images/Frame 53.png"
              alt="Frame 53"
              width={25}
              height={25}
            />
          </li>
          <li>
            <Image
              src="/images/Frame 54.png"
              alt="Frame 54"
              width={25}
              height={25}
            />
          </li>
        </ul>
      </nav>
      <ul className="list-unstyled d-flex justify-content-center gap-4 m-0 p-0">
        <li>
          <Link href="/" className="text-white fs-6 fw-semibold  text-decoration-none">
            Bags
          </Link>
        </li>
        <li>
          <Link href="/About" className="text-white fs-6 fw-semibold  text-decoration-none">
            Travel
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white fs-6 fw-semibold  text-decoration-none">
            Accesories
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white fs-6 fw-semibold  text-decoration-none">
            Gifting
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white fs-6 fw-semibold  text-decoration-none">
            Jewelery
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
