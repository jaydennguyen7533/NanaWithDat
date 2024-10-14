import "./globals.css";
import {Merriweather} from "next/font/google";
import 'animate.css/animate.min.css';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    subsets: ["latin"],
    variable: "--font-merriweather",
});

export const metadata = {
    title: "Khac Dat & Chu Nga - Wedding Invitation",
    description: "Khac Dat & Chu Nga - Wedding Invitation",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${merriweather.className} bodyStyle`}>
        {children}
        </body>
        </html>
    );
}
