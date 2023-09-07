let arrays = [
    {
        user: "Vlad",
        friend: ["Artem"],
        skills: ["a", "h"],
        balance: 100
    },
    {
        user: "Vadim",
        friend: ["Bogdan", "Artem"],
        skills: ["a", "s", "l"],
        balance: 693
    },
    {
        user: "Bogdan",
        friend: ["Vadim", "Artem"],
        skills: ["e"],
        balance: 81
    },
    {
        user: "Ivan",
        friend: ["Vova", "Artem", "Vlad"],
        skills: ["a", "x", "o", "w"],
        balance: 369
    },
    {
        user: "Vova",
        friend: ["Ivan", "Vlad"],
        skills: ["q", "h", "a", "n"],
        balance: 369
    },
    {
        user: "Artem",
        friend: ["Vlad"],
        skills: ["a", "h", "g"],
        balance: 20
    }
]

let money = arrays.reduce((totalBalance, array) => totalBalance + array.balance, 0);
console.log(money);

let currentNameFriend = "Bogdan";

let userCurrentNameFriend = arrays.filter(array => array.friend.includes(currentNameFriend));
console.log(userCurrentNameFriend);




function compareFriends(a, b){
    return a.friend.length - b.friend.length
}

let numberOfFriends = arrays.sort(compareFriends)

console.log(numberOfFriends)




let allSkills = arrays.reduce((skills, array) => {
    skills.push(...array.skills);
    return skills
}, [])


let uniqueSkills = [...new Set(allSkills)]

let sortedSkills = uniqueSkills.sort()

console.log(sortedSkills);


