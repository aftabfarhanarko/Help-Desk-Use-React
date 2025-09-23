import React from "react";

const Footer = () => {
  return (
    <div className="bg-black mt-[100px]">
      <footer className=" flex-col-1 justify-between md:flex-row max-w-[1400px] mx-auto footer sm:footer-horizontal  p-10 text-white">
        <nav>
          <h6 className="footer-title">PH — Assignment System</h6>
          <p className="max-w-[200px]">
            PH Assignment system is a platform that centralizes, tracks, and
            manages requests or issues, converting them into unique "Assignment
            s" for efficient resolution and communication
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">University</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Education & Services</a>
          <a className="link link-hover">Student Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">https://github.com/aftabfarhanarko</a>
          <a className="link link-hover">
            https://www.linkedin.com/in/aftabfarhan/
          </a>
          <a className="link link-hover">https://www.facebook.com/profile</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
