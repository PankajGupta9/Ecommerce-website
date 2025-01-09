import axios from "axios"

export async function productData(){
    const products = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"

    );
    return products;

    /*------use of async await using normal function---------->
    async function generateJokes() {

    }*/
}