export interface IProductCard {
    _id: string;
    categories: {
        category: {
            id: string,
            name: string
        },
        subcategory: {
            id: string,
            name: string
        },
        section: {
            id: string,
            name: string
        } | 'missing',
    },
    information: {
        name: string,
        description: string
    },
    mainPhoto: string,
    additionalPhotos: string[],
    additionalInformation: {
        material: string,
        recommendations: string
    },
    pricesAndQuantity: {
        price: number,
        priceBeforeDiscount: number,
        quantity: number
    },
    dimensions: {
        length: number,
        width: number,
        height: number,
        weight: number,
    },
    deliveryPoints: string[],
    sizeQuantity: ISizes[]
}

export interface ISizes {
    size: string,
    quantity: string
}
