import SideNav from "@/components/about-me/side-nav";
import clsx from "clsx";
import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({ subsets: ["latin"] });
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='h-full'>
        <SideNav />
        </section>
    );
}