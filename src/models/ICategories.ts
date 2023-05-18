export interface ICategories {
    categories: ICategory[] | [],
    isLoading: boolean,
    error: string
}

export interface ICategory {
    name: string,
    icon?: string,
    children: ISubcategories[]
    _id: string
}

export interface ISubcategories {
    name: string,
    children: ISections[]
    _id: string
}

export interface ISections {
    name: string,
    _id: string
}