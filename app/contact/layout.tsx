import CodeContainer from "@/components/about-me/code-container";
import ContactSideNav from "@/components/contact/contact-side-nav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='h-full flex flex-row'>
            <ContactSideNav />
            <div className="flex-grow">
                {children}
            </div>
            <div className="p-5 w-[550px] flex-none h-full border-l border-border">
            <CodeContainer />
            </div>
        </section>
    );
}