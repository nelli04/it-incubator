import {string} from "prop-types";

export type UserType = {
    name: string
    hair: number
    address: {title: string, house: number}
}

export type LaptopType = {
    title: string
}
export type HasLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair:  u.hair / power
    }
    return copy
}

export function moveUser (u: HasLaptopType, power: string) {
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
export function upgradeUserLaptop (u: HasLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
        //laptop:  u.address.title === 'Msk'
    }
    //copy.address = {...copy.address, title: power}
}