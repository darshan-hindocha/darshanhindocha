import Container from "../components/Container";
import Image from "next/image";
import {gql} from 'graphql-request';
import {graphcms} from "../data/graphCMS";

export default function Art({products}) {

    function displayProducts(allProducts) {

        return allProducts.map(product => {
            return (
                <div key={product.id} className="md:m-20 rounded-xl flex-col bg-gray-800">
                    <h1 className="mb-2 mt-8 text-xl text-center tracking-tight md:text-3xl text-gray-200">
                        {product.name}
                    </h1>

                    <p className="text-xs mx-4 tracking-tight text-center md:text-l text-gray-200">
                        {product.description}
                    </p>
                    <div className="mx-14 mb-4 mt-4">
                        {product.images[0] &&
                            <Image
                                alt={product.name}
                                width={product.images[0]?.width}
                                height={product.images[0]?.height}
                                src={product.images[0]?.url}
                                className="rounded-xl"
                            />
                        }
                        {(product.datePainted) &&
                            <p className="text-xs mx-1 justify-self-end tracking-tight text-left md:text-l text-gray-200">
                                Created: {product.datePainted}
                            </p>
                        }
                    </div>

                </div>
            )
        })
    }


    return (
        <Container
            title={`Art – Darshan Hindocha`}
            description={"Art Page by Darshan Hindocha"}
        >
            <div className="grid gap-4 md:grid-cols-2 ">
                {displayProducts(products)}
            </div>

        </Container>

    )
}


export async function getStaticProps({test}) {
    console.log("queried")
    const {products} = await graphcms.request(
        `query getProducts {
                      products(orderBy: displayOrdering_ASC) {
                        id
                        name
                        description
                        price
                        datePainted
                        images {
                          url
                          height
                          width
                        }
                      }
                    }`
    );
    return {
        props: {
            products,
        },
    };
}