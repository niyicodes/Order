import React from "react";
import AppStore from "../assets/app-store-badges-en 1.png";
import Logo from "../assets/order.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <section className="bg-[#D9D9D9] p-[3%] md:p-[5%] flex flex-col gap-5 md:flex-row justify-between">

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 text-center">
            <figure>
              <img src={Logo} alt="logo" />
            </figure>
          </div>
          <figure>
            <img src={AppStore} alt="download" />
          </figure>
          <p>This is a Registered company ##4566</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <article className="flex flex-col gap-2">
            <small className="text-left">
              Get Exclusive Deals in your inbox
            </small>
            <div>
              <div className="relative bg-white rounded-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. EC4R 3TE"
                  className="bg-transparent p-2 outline-none"
                />
                <button className="p-2 h-auto rounded-full bg-[#FC8A06] text-white absolute right-0">
                  Subscribe
                </button>
              </div>
              <p>we won't spam, read our email privacy</p>
            </div>
            <div id="socials"></div>
          </article>
          <article className="flex flex-col gap-3">
            <h2 className="text-[#03081F] text-[25px] font-bold">Legal Pages</h2>
            <ul className="flex flex-col gap-3">
              <li className="underline">
                <Link to={""}>Terms and conditions</Link>
              </li>
              <li className="underline">
                <Link to={""}>Privacy</Link>
              </li>
              <li className="underline">
                <Link to={""}>Cookies</Link>
              </li>
              <li className="underline">
                <Link to={""}>Modern Slavery Statement</Link>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-3">
            <h2 className="text-[#03081F] text-[25px] font-bold">Important Links</h2>
            <ul className="flex flex-col gap-3">
              <li className="underline">
                <Link to={""}>Get help</Link>
              </li>
              <li className="underline">
                <Link to={""}>Add your restaurant</Link>
              </li>
              <li className="underline">
                <Link to={""}>Sign up to deliver</Link>
              </li>
              <li className="underline">
                <Link to={""}>Create a business account</Link>
              </li>
            </ul>
          </article>
        </div>

      </section>
      <section className="bg-[#03081F] text-white p-4 text-[15px]">
        <p>order.uk Copyright 2024, All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
