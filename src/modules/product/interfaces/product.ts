interface IProduct {
    name: string;
    price: number;
    quantity: number;
}
interface IProductUpdate {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export {
    IProduct,
    IProductUpdate
}