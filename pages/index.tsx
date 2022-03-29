import type {NextPage} from 'next'
import Head from 'next/head'
import Button from '@mui/material/Button';
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter();


    return (
        <div  className="bg-gray-50 dark:bg-gray-900 mt-10">
            <Head>
                <title>Darshan Hindocha</title>
                <meta name="description" content="Generated by Darshan"/>
                <link rel="icon" href="/hammer.ico"/>
            </Head>

            <main className="flex flex-col items-center justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    Hello!
                </h1>

                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300 mt-10">
                    I am under construction at the moment.
                </p>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300 mt-10">
                    Here is a test post for now
                </p>

                <Button
                    className="mt-3"
                    variant="contained"
                    onClick={() => {
                        router.push({pathname: '/blog/test'})
                    }}
                >
                    Test Post
                </Button>

            </main>

        </div>
    )
}

export default Home
