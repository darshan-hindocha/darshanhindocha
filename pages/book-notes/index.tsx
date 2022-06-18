import Container from "components/Container";
import BookNotePreview from 'components/BookNotePreview';
import {graphcms} from "../../data/graphCMS";
import {useState} from "react";
import BookList from "../../components/BookList";

export default function BookNotes({bookNotesLists, authorsList}) {
    const [authorFilter, setAuthorFilter] = useState('');
    const selectedTagStyle = "border border-gray-50 bg-gray-50 text-gray-900 rounded-full mb-4 mx-1 py-1 px-3 whitespace-nowrap"
    const unselectedTagStyle = "border border-gray-600 bg-gray-700 rounded-full mb-4 mx-1 py-1 px-3 whitespace-nowrap hover:bg-gray-600 hover:border-gray-300"

    authorsList = authorsList.map((auth) => auth.author)
    // @ts-ignore
    const uniqueAuthorsList = [...new Set(authorsList)]
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
                <div className="flex flex-row justify-start mb-2 gap-1 w-full overflow-x-auto">
                    <button
                        onClick={() => setAuthorFilter('')}
                        className={(authorFilter==='') ? selectedTagStyle: unselectedTagStyle}
                    >
                        All
                    </button>
                    {uniqueAuthorsList?.map((authName) => {
                        return (
                            <button
                                key={authName}
                                onClick={() => setAuthorFilter(authName)}
                                className={(authName===authorFilter) ? selectedTagStyle: unselectedTagStyle}
                            >
                                <p className="text-center">{authName}</p>
                            </button>
                        )
                    })
                    }
                </div>
                {bookNotesLists?.map((row) => {
                    return BookList({row, authorFilter})
                })}
            </div>
        </Container>
    )
}


export async function getStaticProps() {
    const data = await graphcms.request(
        `query getAuthors {
                        bookNotesLists {
                            author
                          }
                    }`
    )
    const authorsList = data.bookNotesLists
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
            authorsList
        },
    };
}