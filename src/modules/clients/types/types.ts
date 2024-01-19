export interface IClient{
    abbreviation?: string;
    fullName?: string;
    accounts?: IAccount[];
    ogrn?: string;
    inn?: string;
    okato?: string;
    okpo?: string;
    addresses?:IAddress[],
}

export interface IAddress{    
    area?: string ; //	Район,
    building?: string ; //	Строение, корпус,
    city?: string ; //	Город,
    comment?: string ; //	Примечание,
    country?: string ; //	Цифровой код страны,
    flat?: string ; //	Квартира,
    fullAddress?: string ; //	Адрес,
    house?: string ; //	Дом,
    region?: string ; //	Субъект или регион,
    settlement?: string ; //	Населенный пункт,
    settlementType?: string ; //	Тип населенного пункта,
    street?: string ; //	Улица,
    type?: string ; //	Наименование типа адреса,
    zip?: string ; //
}

export interface IAccount{
    bic?: string;
    passive?: boolean;
    currencyCode?: string;
    closeDate?: string;
    state?: 'OPEN' | 'BLOCKED' | 'CLOSED'
    number?: string;
}