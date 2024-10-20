import React from "react";
import {AiFillClockCircle} from "react-icons/ai";
import {RevealWrapper} from "next-reveal";

function WeddingEvents() {
    return (
        <section id="wedding-events">
            <div
                className="relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
                <div
                    className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
                <div className="z-10 relative">
                    <h1 className="text-xl italic text-white text-center font-light">
                        Wedding Events
                    </h1>
                    <RevealWrapper duration={1500} origin="bottom">
                        <div className="mt-10">
                            <img
                                src="https://lh3.googleusercontent.com/pw/AP1GczMceN24kUAD2QygHyqvdtBDDYR8vup_WJOvI1lQgUE9-MVGlSwMXccM9eHzhT6OTvUdXK2LnQB7aw9sF79QbpT7zDKWlBm9Oy9QmpkyfAg6RPLX1U9xruNj8ttmsPt9GfvKn5raHQSg8Xma2-xlrxP4=w635-h953-s-no-gm?authuser=0"
                                alt="groom"
                                className="groom-event-img w-full h-80 object-cover rounded-t-[1.25rem]"
                            />
                            <div className="flex">
                                <div className="w-[20%] bg-[#424242] rounded-bl-[1.25rem] flex items-center">
                                    <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
                                        Groom
                                    </p>
                                </div>
                                <div
                                    className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                                    <h1 className="italic text-xl font-light">
                                        Saturday, 02 Nov 2024
                                    </h1>
                                    <hr className="border border-[#5a5a5a80] w-full"/>
                                    <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                                        <AiFillClockCircle/>
                                        <span>04:00 pm</span>
                                    </p>
                                    <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                                        <strong className="text-black font-bold">
                                            Address
                                        </strong>
                                        <br/>
                                        Lỗ Giao, Việt Hùng, Đông Anh, Hà Nội
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/9DaC8dS8GDyKzLxA9"
                                        className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                                    >
                                        GOOGLE MAPS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>
                    <RevealWrapper duration={1500} origin="bottom">
                        <div className="mt-6">
                            <img
                                src="https://lh3.googleusercontent.com/pw/AP1GczOQQA13Rq4PjuKxw-tBcqLcCFKsztQsN17JxuVYXmicJ30jAesugQMpBbGN1nPcszm93Hwery1Dq1Z1oCG2moIZVvFDH7btZ1xxgzgU9nvLU2-gah3YBity_LPx4JCY4jqa-7wl-o4BEu5FYkaX49P6=w635-h953-s-no-gm?authuser=0"
                                alt="akad"
                                className="bride-event-img w-full h-72 object-cover rounded-t-[1.25rem] object-left"
                            />
                            <div className="flex">
                                <div
                                    className="w-[80%] bg-white px-4 py-6 rounded-bl-[1.25rem] flex flex-col gap-5 items-baseline">
                                    <h1 className="italic text-xl font-light">
                                        Saturday, 02 Nov 2024
                                    </h1>
                                    <hr className="border border-[#5a5a5a80] w-full"/>
                                    <div>
                                        <p className="flex items-center text-[#5a5a5a] font-light text-[0.8rem] gap-1.5">
                                            <AiFillClockCircle/>
                                            <span>08:00 am</span>
                                        </p>
                                    </div>
                                    <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                                        <strong className="text-black font-bold">
                                            Address
                                        </strong>
                                        <br/>
                                        Đan Loan, Nhân Quyền, Bình Giang, Hải Dương
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/1BxP9osJf6wzvvZD7"
                                        className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                                    >
                                        GOOGLE MAPS
                                    </a>
                                </div>
                                <div className="w-[20%] bg-[#424242] rounded-br-[1.25rem] flex items-center">
                                    <p className="-rotate-90 text-center text-white font-bold text-[1.75rem] sm:-translate-x-[0rem] -translate-x-[1rem] tracking-[5px]">
                                        Bride
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}

export default WeddingEvents;
