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

                <p className="mb-4 text-l tracking-tight md:text-xl text-gray-100">
                    I like to keep track of the books I read. So that I can stay in touch with the ideas that have blown
                    my mind
                    in the past.
                </p>
                <TableContainer
                    component={Paper}
                    className="text-2xl font-bold rounded-lg text-white">
                    <Table sx={{minWidth: 600}} aria-label="simple table">
                        <TableHead className="bg-gray-700">
                            <TableRow>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base"
                                >Read Around</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base"
                                >Title</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base"
                                >Author</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base"
                                >Retailer</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base"
                                >Discussion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookNotesLists?.map((row) => (
                                <TableRow
                                    key={row?.title}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    className="bg-gray-600"
                                >
                                    <TableCell component="th" scope="row"
                                               className="w-full mb-2 text-xs font-medium md:text-sm"
                                    >
                                        {row?.dateRead}
                                    </TableCell>
                                    <TableCell
                                        className="w-full mb-2 text-xs font-medium md:text-sm"
                                    >{row?.title}</TableCell>
                                    <TableCell
                                        className="w-full mb-2 text-xs font-medium md:text-sm"
                                    >{row?.author}</TableCell>
                                    <TableCell
                                        className="w-full mb-2 text-xs font-medium md:text-sm"
                                    >
                                        <a
                                            href={row?.linkToBuy}
                                            style={{textDecorationLine: "underline"}}
                                        >
                                            {row?.retailer}
                                        </a>
                                    </TableCell>
                                    <TableCell
                                        className="w-full mb-2 text-xs font-medium md:text-sm"
                                    >
                                        {row?.slug &&
                                            <a
                                                href={`/book-notes/` + row?.slug}
                                                style={{textDecorationLine: "underline"}}
                                            >
                                                Book Notes
                                            </a>

                                        }
                                        {!row?.slug &&
                                            <p>-</p>
                                        }

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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