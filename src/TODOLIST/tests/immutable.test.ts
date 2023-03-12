import {HasLaptopType, makeHairstyle, moveUser, upgradeUserLaptop, UserType} from "./immutable";

test ('reference type test', () => {
    let user: UserType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 15
        }
    }

    let awesomeUser = makeHairstyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})
test ('change address', () => {
    let user: HasLaptopType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let movedUser = moveUser(user, 'Msk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Msk')
})
test ('upgrade laptop to macBook', () => {
    let user: HasLaptopType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
})