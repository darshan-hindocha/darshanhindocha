import Head from 'next/head';
import NextLink from 'next/link';
import {useRouter} from "next/router";
import cn from 'classnames';
import MobileMenu from "./MobileMenu";


function NavItem({href, text}) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink href={href}>
            <a
                className={cn(
                    isActive
                        ? 'font-semibold text-gray-50'
                        : 'font-normal text-gray-100',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-600 transition-all'
                )}
            >
                <span className="capsize">{text}</span>
            </a>
        </NextLink>
    );
}

export default function Container(props) {
    const router = useRouter();


    const {children, ...customMeta} = props;
    const meta = {
        title: 'Darshan Hindocha',
        description: `Software Engineer, (ex?)-Mathematician, (wannabe)-Writer and (sometimes)-Painter.`,
        type: 'website',
        image: 'https://darshanhindocha.vercel.app/static/images/banner.png',
        ...customMeta
    };

    return (
        <div className="bg-gray-900">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta property="og:url" content={`https://darshanhindocha.vercel.app${router.asPath}`}/>
                <link rel="canonical" href={`https://darshanhindocha.vercel.app${router.asPath}`}/>
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Darshan Hindocha"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>

            <nav
                className="flex justify-between fixed z-10 w-full border-gray-700 pt-2 pb-2 sm:pb-2 bg-gray-700 bg-opacity-60 text-gray-100"
            >
                <div className="m-4">
                    <MobileMenu/>
                    <NavItem href="/" text="Home"/>
                    <NavItem href="/blog" text="Blog"/>
                    <NavItem href="/book-notes" text="Book Notes"/>
                    <NavItem href="/art" text="Art"/>
                    <NavItem href="/about" text="About"/>
                </div>
            </nav>
            <main
                className="flex flex-col mt-40 justify-center px-8 bg-gray-900"
            >
                {children}
            </main>
        </div>
    );
}