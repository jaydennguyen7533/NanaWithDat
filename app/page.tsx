"use client";

import {useEffect, useState} from "react";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import WeddingEvents from "./components/WeddingEvents";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import {RevealWrapper} from "next-reveal";

export default function Home() {
    const [currentOverflow, setCurrentOverflow] = useState("auto");

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        document.body.style.overflowY = currentOverflow;
    }, [currentOverflow]);

    return (
        <main className="max-w-[34.125rem] mx-auto">
            <RevealWrapper duration={1500}>
                <Hero setCurrentOverflow={setCurrentOverflow}/>
            </RevealWrapper>
            <Countdown/>
            <WeddingEvents/>
            {/*<Reservation/>*/}
            <Gallery/>
            <Footer/>
        </main>
    );
}
