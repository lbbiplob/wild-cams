import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-12">
      <div className="w-24">
        <img src={logo} alt="" />
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Full Body</Link>
        <Link className="link link-hover">Environmental</Link>
        <Link className="link link-hover">Frame-filling</Link>
        <Link className="link link-hover">Capture Behaviours</Link>
        <Link className="link link-hover">Gesture</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
