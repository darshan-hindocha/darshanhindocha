import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import Container from "components/Container";
import BookNotePreview from 'components/BookNotePreview';
import {graphcms} from "../../data/graphCMS";

export default function BookNotes({bookNotesLists}) {

    return (
        <Container
            title="Book Notes – Darshan Hindocha"
            description="Book Notes and Summaries"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-5xl text-white">
                    Book Notes
                </h1>

                <p className="mb-4 mt-4 text-l tracking-tight md:text-xl text-gray-100">
                    Books are great. No?
                </p>
                <BookNotePreview
                    title="Test Book Notes"
                    summary="Just checking to see if this thing works..."
                    slug="test-book-note"
                    publishedAt="2022-04-01"
                    recommendation={9}
                />

                <p className="mb-12 text-l tracking-tight md:text-xl text-gray-100">
                    I like to keep track of the books I read. So that I can stay in touch with the ideas that have blown
                    my mind
                    in the past.
                </p>

                {bookNotesLists?.map((row) => {
                    return (
                        <div key={row?.title}>
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
                })}
            </div>
        </Container>
    )
}


export async function getStaticProps() {
    const {bookNotesLists} = await graphcms.request(
        `query getBooksReadList {
                      bookNotesLists(orderBy: dateReadDateType_DESC) {
                        author
                        dateRead
                        id
                        linkToBuy
                        retailer
                        slug
                        title
                      }
                    }`
    );
    return {
        props: {
            bookNotesLists,
        },
    };
}