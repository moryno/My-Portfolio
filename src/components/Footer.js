import React from "react";
import {
  Facebook,
  Instagram,
  LocationOn,
  MailOutline,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <main className="w-full bg-background text-gray-300 text-sm">
      <section className="flex flex-col lg:flex-row gap-2 container items-center mx-auto justify-between p-5 md:py-10">
        <article className="flex gap-2">
          <div className="flex items-center justify-center rounded-full w-5 h-5">
            <Twitter />
          </div>
          <div className="flex items-center justify-center rounded-full w-5 h-5">
            <Facebook />
          </div>
          <div className="flex items-center justify-center rounded-full w-5 h-5">
            <Instagram />
          </div>
          <div className="flex items-center justify-center rounded-full w-5 h-5">
            <MailOutline />
          </div>
        </article>
        <p>
          Copyright © {year} Maurice Nganga, all rights reserved. Design by{" "}
          <span className="text-title">Maurice</span>
        </p>
        <article className="flex items-center gap-2">
          {" "}
          <div className="flex items-center justify-center rounded-full w-5 h-5 text-title">
            <Phone />
          </div>
          {"  "}
          (+254) 715 018 410
        </article>
      </section>
    </main>
  );
};

export default Footer;
