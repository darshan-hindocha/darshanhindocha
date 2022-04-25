import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from "components/Container";
import BookNotePreview from 'components/BookNotePreview';

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

const rows = [
    createData('Pre-2022', 'Outliers', 'Malcom Gladwell', 'https://www.amazon.co.uk/Outliers-Story-Success-Malcolm-Gladwell/dp/0141036257/ref=asc_df_0141036257/?tag=googshopuk-21&linkCode=df0&hvadid=310834580283&hvpos=&hvnetw=g&hvrand=278425882389793040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007210&hvtargid=pla-466623711983&psc=1&th=1&psc=1', 'Amazon', 'outliers'),
    createData('Pre-2022', 'Outliers', 'Malcom Gladwell', 'https://www.amazon.co.uk/Outliers-Story-Success-Malcolm-Gladwell/dp/0141036257/ref=asc_df_0141036257/?tag=googshopuk-21&linkCode=df0&hvadid=310834580283&hvpos=&hvnetw=g&hvrand=278425882389793040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007210&hvtargid=pla-466623711983&psc=1&th=1&psc=1', 'Amazon', 'outliers'),
    createData('Pre-2022', 'Outliers', 'Malcom Gladwell', 'https://www.amazon.co.uk/Outliers-Story-Success-Malcolm-Gladwell/dp/0141036257/ref=asc_df_0141036257/?tag=googshopuk-21&linkCode=df0&hvadid=310834580283&hvpos=&hvnetw=g&hvrand=278425882389793040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007210&hvtargid=pla-466623711983&psc=1&th=1&psc=1', 'Amazon', 'outliers'),
    createData('Pre-2022', 'Outliers', 'Malcom Gladwell', 'https://www.amazon.co.uk/Outliers-Story-Success-Malcolm-Gladwell/dp/0141036257/ref=asc_df_0141036257/?tag=googshopuk-21&linkCode=df0&hvadid=310834580283&hvpos=&hvnetw=g&hvrand=278425882389793040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007210&hvtargid=pla-466623711983&psc=1&th=1&psc=1', 'Amazon', 'outliers'),
    createData('Pre-2022', 'Outliers', 'Malcom Gladwell', 'https://www.amazon.co.uk/Outliers-Story-Success-Malcolm-Gladwell/dp/0141036257/ref=asc_df_0141036257/?tag=googshopuk-21&linkCode=df0&hvadid=310834580283&hvpos=&hvnetw=g&hvrand=278425882389793040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007210&hvtargid=pla-466623711983&psc=1&th=1&psc=1', 'Amazon', 'outliers'),
];


export default function BookNotes() {
    return (
        <Container
            title="Book Notes – Darshan Hindocha"
            description="Book Notes and Summaries"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    Book Notes
                </h1>
                <BookNotePreview
                    title="Test Book Notes"
                    summary="Just checking to see if this thing works..."
                    slug="test-book-note"
                />
                <TableContainer
                    component={Paper}
                    className="bg-gray-200 text-2xl font-bold dark:bg-gray-400 text-black dark:text-white">
                    <Table sx={{minWidth: 600}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Stage</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Author</TableCell>
                                <TableCell align="right">Retailer</TableCell>
                                <TableCell align="right">Discussion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.title}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.dateRead}
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.author}</TableCell>
                                    <TableCell align="right">{row.retailer}</TableCell>
                                    <TableCell align="right">{row.slug}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </Container>
    )
}