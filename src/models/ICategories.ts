export interface ICategories {
    categories: ICategory[] | [],
    isLoading: boolean,
    error: string
}

export interface ICategory {
    name: string,
    icon: string,
    children: ISubcategories[]
}

export interface ISubcategories {
    name: string,
    children: ISections[]
}

export interface ISections {
    name: string,
}