import Container from "../components/Container";
import Image from "next/image";
import {gql} from 'graphql-request';
import {graphcms} from "../data/graphCMS";

export default function Art({product}) {
    return (
        <Container
            title={`Art – Darshan Hindocha`}
            description={"Art Page by Darshan Hindocha"}
        >
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-gray-200 m-5">
                    {product.name}
                    {product.description}
                </div>
            </div>

        </Container>

    )
}


export async function getStaticProps({test}) {
    const {product} = await graphcms.request(
        `
    query TestProduct {
      product( where: { id: "cl34rmdmszgts0bmgeuyey9qj"}) {
        name
        description
        price
        images {
            url
            height
            width
        }
      }
    }
  `
    );
    console.log(product)
    return {
        props: {
            product,
        },
    };
}