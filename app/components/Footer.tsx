import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('https://lh3.googleusercontent.com/pw/AP1GczPI8WNxXgJ5TPtbSgkJrhQ8_169KLmmnRvxjt5-iUj-7rOgAaNseiuPXY5wp2dB3i1-OjniYhq0LQGhpfQ2PBO9c6wIDp86IwQRmD3-1i-8rvv1oPopF-zfPcPk5rMXyWAqThlJbkvkxuUdbbBnweKs=w635-h953-s-no-gm?authuser=0')] bg-cover bg-[60%] bg-no-repeat flex flex-col-reverse ">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[2.25rem] font-light leading-relaxed">
                Khắc Đạt & Chu Nga
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-[1.75rem] font-light">Thank you!</h1>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="bg-[#424242] p-20 flex items-center justify-center">
        <img src="../favicon.ico" alt="logo" className="w-24" />
      </div>
    </section>
  );
}

export default Footer;
