export default function BookList({row, authorFilter}) {
    if (row?.author != authorFilter && authorFilter != '') {
        return
    } else {
        return (
            <div>
                <h1 className="mb-1 text-xl tracking-tight md:text-2xl text-white">
                    {row?.title}
                </h1>
                <h2 className="ml-8 mb-1 text-md font-light md:text-lg">
                    {row?.author} {` • `}
                    <a
                        href={row?.linkToBuy}
                        className="cursor-pointer underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <em>Buy from {row?.retailer}</em>
                    </a>
                </h2>
                <h2 className="ml-8 mb-8 text-md font-light md:text-lg">
                    Read Around: {row?.dateRead}{` • `} Book Notes:
                    {row?.slug ? <a
                            href={`/book-notes/` + row?.slug}
                            className="underline cursor-pointer"
                        >
                            Available
                        </a>
                        :
                        ' -'
                    }
                </h2>
            </div>
        )
    }
}