import Products from "../data/DB/products.json";
import Prices from "../data/DB/pricebook.json";
import Options from "../data/DB/options.json";
import Category from '../components/Product/Category';


export type ProductType = {
    
        "id": number,
        "name": string,
        "category": "Vegetarian",
        "ingredients": string[],
        "image": string[]
    
}

export const CategoryList = (): string[] => {

    const Categories:string[] = Products.map(el=>el.category).flat(1).filter((item, i, ar) => ar.indexOf(item) === i)

    return Categories;
} 

export const ProductsPageList = (page: number, filters: string[] ): ProductType[] => {
    



    return [];
}