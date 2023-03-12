import {
    addNewBooks, companyUsers, CompanyUserType,
    HasLaptopType,
    makeHairstyle,
    moveUser,
    ReadBooksType, removeBook, SkillType, updateBook, updateSkill,
    upgradeUserLaptop,
    usersReadBooks,
    UserType
} from "./immutable";

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
test ('users read books', () => {
    let user: HasLaptopType & ReadBooksType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'react', 'ts', 'refactor js'
        ]
    }

    let userCopy = usersReadBooks(user, 100)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('ZenBook')
    expect(userCopy.address.house).toBe(100)
})
test ('users add new books', () => {
    let user: HasLaptopType & ReadBooksType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'react', 'ts', 'refactor js'
        ]
    }

    let userCopy = addNewBooks(user, 'rest API')

    expect(user).not.toBe(userCopy.books)
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('ZenBook')
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('rest API')
})
test ('js to ts', () => {
    let user: HasLaptopType & ReadBooksType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'react', 'ts', 'refactor js'
        ]
    }

    let userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy.books)
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('ZenBook')
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('ts')
})
test ('skill to up', () => {
    let user: HasLaptopType & ReadBooksType & SkillType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'react', 'ts', 'refactor js'
        ],
        skill: [30]
    }

    let userCopy = updateSkill(user, 30, 100)

    expect(user).not.toBe(userCopy.skill)
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('ZenBook')
    expect(user.address).toBe(userCopy.address)
    //expect(userCopy.books[2]).toBe('ts')
    expect(userCopy.skill[0]).toBe(100)
})
test ('remove js book', () => {
    let user: HasLaptopType & ReadBooksType & SkillType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'react', 'ts', 'refactor js'
        ],
        skill: [30]
    }

    let userCopy = removeBook(user, 'ts')

    expect(user).not.toBe(userCopy.books)
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('ZenBook')
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('refactor js')
    //expect(userCopy.books.length).toBe(2)
})
test ('company user', () => {
    let user: CompanyUserType & ReadBooksType & HasLaptopType = {
        name: 'N',
        hair: 32,
        address: {
            title: 'M',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'react', 'ts', 'refactor js'
        ],
        company: [
            {id: 1, title: 'E'},
            {id: 2, title: 'I'},
        ]
    }

    let userCopy = companyUsers(user, 'Google', 1) as CompanyUserType & ReadBooksType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.company).not.toBe(userCopy.company)
    expect(userCopy.company[0].title).toBe('Google')
})