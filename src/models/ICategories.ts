export interface ICategories {
    categories: ICategory[] | [],
    isLoading: boolean,
    error: string
}

export interface ICategory {
    name: string,
    icon?: string,
    children: ISubcategories[],
    productCards: string[],
    _id: string
}

export interface ISubcategories {
    name: string,
    children: ISections[]
    _id: string,
    alternateName: string
}

export interface ISections {
    name: string,
    _id: string
}
