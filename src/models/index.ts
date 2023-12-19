import CategoriesLib from "../data/DB/categories.json"

export type CategoryType = {
    "id": number,
    "title": string
}

export type SortingType = 'price' | 'rating' | 'title'

export type ProductType = {
    
    "id": string,
    "images": string[],
    "title": string,
    "info": string[],
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number,
    "reviews": number
    
}


// https://658028cf6ae0629a3f548137.mockapi.io/api/v1/pricebook
// https://658028cf6ae0629a3f548137.mockapi.io/api/v1/products/

export const CategoryList = (): CategoryType[] => {
    
    return CategoriesLib;
} 

export const ProductsPageList = async (page: number = 0, filters: string[] = [] ) => {
    
        const basedURL = "https://658028cf6ae0629a3f548137.mockapi.io/items";
        // let getPages:ProductType[] = [];
        // const catalogProducts = async () => {
        //     const productsDB = await fetch(basedURL).then(res=>res.json())
            
        // }

    return await fetch(basedURL).then(res=>res.json());
}