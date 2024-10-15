import React from "react";
import Countdown from "react-countdown";
import {RevealWrapper} from "next-reveal";

function CountdownComp() {
    function renderer({
                          days,
                          hours,
                          minutes,
                          seconds,
                          completed,
                      }: {
        days: any;
        hours: any;
        minutes: any;
        seconds: any;
        completed: any;
    }) {
        return completed ? (
            <span>Acara sudah berlalu.</span>
        ) : (
            <span>
        {days} day {hours} hr
        <br/>
                {minutes} min {seconds} sec
      </span>
        );
    }

    return (
        <section id="countdown">
            <div
                className="min-h-screen bg-[url('https://lh3.googleusercontent.com/pw/AP1GczOj9tdmGQ_7Ceuj65BFs4g9H-KemhD4MksGPzlzYlRenFB5w8e2K1m9KyrvaRZL9ACTapQVVt8v0RvHd3qIkxn2QcJcqc66pWlvIjHQG46nqflVplcTpfQOlva3Sq5DBPKxRZczyyzLJOpPAjAjDUkB=w635-h953-s-no-gm?authuser=0')] bg-cover bg-[44.5%] text-white relative py-28 flex items-end">
                <div className="absolute inset-0 bg-black/30"/>
                <div className="relative py-8 px-10 w-full">
                    <div
                        className="bg-[#00000021] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
                        style={{backdropFilter: "blur(6px)"}}
                    />
                    <div className="relative z-20">
                        <RevealWrapper duration={2500} origin="bottom">
                            <p className="text-sm font-light">WEDDING INVITATION</p>
                            <h1 className="text-3xl font-light mt-2 mb-4">Khắc Đạt & Chu Nga</h1>
                            <div
                                className="grid grid-cols-2 border-y border-y-white text-center text-[0.75rem] font-light">
                                <p className="leading-[1.85] py-2 px-2 border-r border-r-white flex flex-col gap-2">
                                    <span>SAVE THE DATE</span>
                                    <span>Saturday, 02 Nov 2024</span>
                                </p>
                                <p className="py-2 px-2 flex flex-col gap-2">
                                    <span>COUNTDOWN</span>
                                    <Countdown
                                        date={new Date("2024-11-02")}
                                        renderer={renderer}
                                    />
                                </p>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountdownComp;
