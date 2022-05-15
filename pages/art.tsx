import Container from "../components/Container";
import Image from "next/image";
import {gql} from 'graphql-request';
import {graphcms} from "../data/graphCMS";

export default function Art({products}) {

    function displayProducts(allProducts) {

        return allProducts.map(product => {
            return (
                <div className="bg-gray-200 m-5">
                    <h1>{product.name}</h1>

                    <div className="m-8">
                        {product.images[0] &&
                            <Image
                                alt={product.name}
                                width={product.images[0]?.width}
                                height={product.images[0]?.height}
                                src={product.images[0]?.url}
                            />
                        }
                    </div>
                    <p>{product.description}</p>
                </div>
            )
        })
    }


    return (
        <Container
            title={`Art – Darshan Hindocha`}
            description={"Art Page by Darshan Hindocha"}
        >
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {displayProducts(products)}
            </div>

        </Container>

    )
}


export async function getStaticProps({test}) {
    const {products} = await graphcms.request(
        `query getProducts {
                      products {
                        name
                        description
                        price
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