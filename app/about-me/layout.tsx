import CodeContainer from "@/components/about-me/code-container";
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
        <section className='h-full flex flex-row flex-1 overflow-auto'>
            <SideNav />
            <div className="flex-grow">
                {children}
            </div>
            <div className="p-5 w-[550px] flex-none h-full border-l border-border overflow-x-auto">
            <CodeContainer />
            </div>
        </section>
    );
}