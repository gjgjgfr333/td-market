export interface ICategories {
    categories: ICategory[] | [],
    isLoading: boolean,
    error: string
}

export interface ICategory {
    name: string,
    icon?: string,
    children: ISubcategory[],
    productCards: string[],
    _id: string
}

export interface ISubcategory {
    name: string,
    children: ISection[]
    _id: string,
    alternateName: string
}

export interface ISection {
    name: string,
    _id: string
}
