import React from "react";
import {RevealWrapper} from "next-reveal";

function Footer() {
    return (
        <section id="footer">
            <div className="relative h-screen">
                <div
                    className=" h-screen flex flex-col-reverse bg-[url('https://lh3.googleusercontent.com/pw/AP1GczP1EPphvRPqK7ajkNvYbYxKkG6wIsmMN8DqMekeNqJNBMRtrqBY-LyKVPh8T0tX3DhFJwDE3fl8j2M9KUGCcx9RbKcf2PFCDRTy3lCoFDqzC9Y8QmG4iQBZ-mRl_3ZAT2LzE88mKNAxQMP91eekWj0I=w635-h953-s-no-gm?authuser=0')] bg-contain bg-no-repeat">
                </div>
                {/*<div*/}
                {/*    className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 -top-24"></div>*/}
                {/*<div className="relative">*/}
                {/*  <div*/}
                {/*      className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 -top-24"></div>*/}
                {/*<div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">*/}
                {/*<RevealWrapper duration={1500} origin="top">*/}
                {/*  <p className="text-[2.25rem] font-light leading-relaxed">*/}
                {/*    Khắc Đạt & Chu Nga*/}
                {/*  </p>*/}
                {/*</RevealWrapper>*/}
                {/*    <RevealWrapper duration={1500} origin="bottom">*/}
                {/*        <h1 className="text-[1.75rem] font-light">Thank you!</h1>*/}
                {/*    </RevealWrapper>*/}
                {/*</div>*/}
                {/*</div>*/}
                <div
                    className="h-1/2 p-10 flex items-center flex-col-reverse bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 ">
                    <img src="../favicon.ico" alt="logo" className="w-24"/>
                </div>
            </div>


        </section>
    );
}

export default Footer;
