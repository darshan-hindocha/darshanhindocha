import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from "components/Container";
import BookNotePreview from 'components/BookNotePreview';
import {booksRead} from "../../data/booksReadData";

function createData(
    dateRead: string,
    title: string,
    author: string,
    linkToBuy: string,
    retailer: string,
    slug: string
) {
    return {dateRead, title, author, linkToBuy, retailer, slug};
}

const rows = booksRead.map(book => createData(book.dateRead, book.title, book.author, book.linkToBuy, book.retailer, book.slug))



export default function BookNotes() {
    return (
        <Container
            title="Book Notes – Darshan Hindocha"
            description="Book Notes and Summaries"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-5xl text-white">
                    Book Notes
                </h1>

                <p className="mb-4 mt-4 text-l tracking-tight md:text-xl text-gray-200">
                    Books are great. No?
                </p>
                <BookNotePreview
                    title="Test Book Notes"
                    summary="Just checking to see if this thing works..."
                    slug="test-book-note"
                />

                <p className="mb-4 text-l tracking-tight md:text-xl text-gray-200">
                    I like to keep track of the books I read. So that I can stay in touch with the ideas that have blown my mind
                    in the past.
                </p>
                <TableContainer
                    component={Paper}
                    className="text-2xl font-bold bg-gray-400 text-white">
                    <Table sx={{minWidth: 600}} aria-label="simple table">
                        <TableHead>
                            <TableRow className="bg-gray-800">
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base text-gray-100"
                                >Date Read</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base text-gray-100"
                                >Title</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base text-gray-100"
                                >Author</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base text-gray-100"
                                >Retailer</TableCell>
                                <TableCell
                                    className="w-full mb-2 text-xs font-medium md:text-base text-gray-100"
                                >Discussion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.title}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    className="bg-gray-700"
                                >
                                    <TableCell component="th" scope="row"
                                               className="w-full mb-2 text-xs font-medium md:text-sm text-gray-100"
                                    >
                                        {row.dateRead}
                                    </TableCell>
                                    <TableCell
                                        className="w-full mb-2 text-xs font-medium md:text-sm text-gray-100"
                                    >{row.title}</TableCell>
                                    <TableCell
                                        className="w-full mb-2 text-xs font-medium md:text-sm text-gray-100"
                                    >{row.author}</TableCell>
                                    <TableCell align="right"
                                               className="w-full mb-2 text-xs font-medium md:text-sm text-gray-100"
                                    >
                                        <a
                                            href={row.linkToBuy}
                                            style={{textDecorationLine: "underline"}}
                                        >
                                            {row.retailer}
                                        </a>
                                    </TableCell>
                                    <TableCell align="right"
                                               className="w-full mb-2 text-xs font-medium md:text-sm text-gray-100"
                                    >
                                        {row.slug.length > 0 &&
                                            <a
                                                href={`/book-notes/` + row.slug}
                                                style={{textDecorationLine: "underline"}}
                                            >
                                                Book Notes
                                            </a>

                                        }
                                        {row.slug.length === 0 &&
                                            <p>Notes in progress</p>
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