"use client";

import {useEffect} from "react";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import WeddingEvents from "./components/WeddingEvents";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import {RevealWrapper} from "next-reveal";
import useSound from "use-sound";
import {useGesture} from 'react-use-gesture';
import Gift from "@/app/components/Gift";


export default function Home() {
    const [play, {sound}] = useSound("/audio/backsound.mp3", {
        volume: 0.5,
        interrupt: true
    });

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    useGesture({
        onWheel: ({event}) => {
            // Phát nhạc khi scroll
            play();
        },
        onDrag: ({event}) => {
            // Phát nhạc khi swipe trên màn hình
            play();
        }
    });

    useEffect(() => {
        if (sound && sound.playing()) return;
        // Bắt đầu phát âm thanh khi người dùng cuộn trang
        play();
    }, [play]);

    const handlePlay = () => {
        if (sound && sound.playing()) return;
        play();
    }
    return (
        <main className="max-w-[34.125rem] mx-auto">
            <RevealWrapper duration={1500}>
                <Hero/>
            </RevealWrapper>
            <Countdown/>
            <WeddingEvents/>
            {/*<Reservation/>*/}
            <Gallery/>
            <Gift/>
            <Footer/>
        </main>
    );
}
