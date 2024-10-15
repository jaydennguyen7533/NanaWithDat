"use client";

import React from "react";

function Hero() {


    return (
        <section id="hero">
            <div
                className="min-h-screen bg-[url('https://lh3.googleusercontent.com/pw/AP1GczNNR-hiQ8RSu0hZyGQJuy_hLFjaR2aC6OxmHL5YpiaLG_ZFf1THustfyenOUjMPnwqAKlnVDnXojtFS5WWEpdSKBhEwl7ry0Xc1E0u1e4-z5eXWxQkpgH1sqUXrOeRz8S0gWyzjII_YlI7cZcbKMm-v=w635-h953-s-no-gm?authuser=0')] bg-cover bg-center text-white relative">
                <div className="absolute inset-0 z-10"/>
                <div
                    className="animate__animated animate__fadeInLeft flex flex-col justify-between pt-4 md:pt-28  px-12 text-center z-20 relative h-screen">
                    {/*<RevealWrapper duration={4000} origin="top">*/}
                    <div>
                        <p className="font-extralight text-[1rem]">The Wedding</p>
                        <h1 className="text-5xl font-light mt-2 nameStyle">Khắc Đạt <img
                            src="/images/hero/love-icon.gif"
                            className="loveIcon" alt="My GIF"/> Chu
                            Nga</h1>
                    </div>

                    {/*<p className="font-extralight text-[0.8rem] mt-4">*/}
                    {/*    Monday, 20 April 2069*/}
                    {/*</p>*/}
                    {/*</RevealWrapper>*/}
                    {/*<RevealWrapper duration={4000} origin="bottom">*/}

                    {/*<div className="flex flex-col items-center gap-2">*/}
                    {/*    /!*<p className="text-[0.8rem]">Mercure Bandung City Center</p>*!/*/}
                    {/*    <p className="text-[0.8rem]">*/}
                    {/*        Lỗ Giao, Việt Hùng, Đông Anh, Hà Nội*/}
                    {/*    </p>*/}
                    {/*    <a*/}
                    {/*        href="#countdown"*/}
                    {/*        onClick={() => {*/}
                    {/*            setCurrentOverflow("auto");*/}
                    {/*            handlePlay()*/}
                    {/*        }}*/}
                    {/*        className="hover:scale-90 rounded-lg flex items-center gap-2 mt-6 ease-linear duration-[0.2s]"*/}
                    {/*    >*/}
                    {/*        <img src="/images/hero/start.gif" className="w-48 h-12" alt="My GIF"/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/*</RevealWrapper>*/}
                </div>
            </div>
        </section>
    );
}

export default Hero;
