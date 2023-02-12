export interface ICategories {
    categories: ICategory[] | [],
    isLoading: boolean,
    error: string
}

export interface ICategory {
    name: string,
    icon: string,
    subcategories: ISubcategories
}

export interface ISubcategories {
    name: string,
    sections: string[]
}