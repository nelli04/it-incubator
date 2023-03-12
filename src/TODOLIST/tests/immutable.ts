export type UserType = {
    name: string
    hair: number
    address: { title: string, house: number }
}
export type LaptopType = {
    title: string
}
export type HasLaptopType = UserType & {
    laptop: LaptopType
}
export type ReadBooksType = UserType & {
    books: string[]
}
export type SkillType = UserType & {
    skill: number[]
}
export type CompanyUserType = {
    company: Array<{title: string, id: number}>
}

export function makeHairstyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}
export function moveUser(u: HasLaptopType, power: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: power
        }
        //laptop:  u.address.title === 'Msk'
    }
    //copy.address = {...copy.address, title: power}
}
export function upgradeUserLaptop(u: HasLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}
export function usersReadBooks(u: ReadBooksType & HasLaptopType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export function addNewBooks(u: HasLaptopType & ReadBooksType, book: string) {
    return {
        ...u,
        books: [...u.books, book]
    }
    //copy.books.concat(book)
}
export function updateBook(u: HasLaptopType & ReadBooksType, del: string, book: string) {
    return {
        ...u,
        books: u.books.map(b => b === del ? book : b)
    }
}
export function updateSkill(u: HasLaptopType & ReadBooksType & SkillType, del: number, book: number) {
    return {
        ...u,
        skill: u.skill.map(s => s === del ? book : s)
    }
}
export function removeBook(u: HasLaptopType & ReadBooksType, del: string) {
    return {
        ...u,
        books: u.books.filter(f => f !== del)
    }
}
export function companyUsers(u: CompanyUserType,  com: string, id: number) {
    return {
        ...u,
        company: u.company.map(c => c.id === id ? {...c, title: com} : c)
    }
}