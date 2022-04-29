export type booksReadType = {
    dateRead: string,
    title: string,
    author: string,
    linkToBuy: string,
    retailer: string,
    slug: string
}


export const booksRead: Array<booksReadType> = [
    {
        dateRead: 'Apr-2022',
        title: 'Outliers',
        author: 'Malcom Gladwell',
        linkToBuy: 'https://www.amazon.co.uk/dp/B002RI9PKO/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
        retailer: 'Amazon',
        slug: ''
    },
    {
        dateRead: 'Nov-2021',
        title: 'Digital Minimalism',
        author: 'Cal Newport',
        linkToBuy: 'https://www.amazon.co.uk/Digital-Minimalism-Living-Better-Technology/dp/B07N129ZX1/ref=sr_1_1?keywords=digital+minimalism&qid=1651274688&sr=8-1',
        retailer: 'Amazon',
        slug: ''
    },
    {
        dateRead: 'Mar-2021',
        title: 'Moneyball',
        author: 'Michael Lewis',
        linkToBuy: 'https://www.amazon.co.uk/Moneyball-Art-Winning-Unfair-Game/dp/0393324818?psc=1',
        retailer: 'Amazon',
        slug: ''
    },
    {
        dateRead: 'Jan-2022',
        title: 'Deep Work',
        author: 'Cal Newport',
        linkToBuy: 'https://www.calnewport.com/books/deep-work/',
        retailer: "Cal's Website",
        slug: ''
    }
]