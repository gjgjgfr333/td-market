export interface IProductCard {
    categories: {
        category: string,
        subcategory: string,
        section: string,
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
    deliveryPoints: string[]
}