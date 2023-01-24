export type TCity = 'Тирасполь' | 'Бендеры' | 'Рыбница' | 'Дубоссары' | 'Слободзея' | 'Григориополь' | 'Каменка'

export interface ICities {
    cities: TCity[],
    city: TCity,
    isLoading: boolean,
    error: string
}