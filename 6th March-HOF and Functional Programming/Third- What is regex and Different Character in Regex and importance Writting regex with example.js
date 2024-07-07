//regex-> Regualar expression

let pattern ='pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"

const result =regExThree.test(strToCheck)
console.log(result)

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult)

const oneMoreResult=strToCheck.replace(regExThree,'p-w')
console.log(oneMoreResult)

const webUrl = "https://pwskills.com/shourya%20shri"

const usableurl=webUrl.replace(/%20/,'-')
console.log(usableurl)

const webUrl2 = "https://pwskills.com/shourya%20shri"

const usableurl2=webUrl.replace(/%\d0/,' ') // 1 d means means only 1 number after percentafe. We can take 2 d's and so on for the numbers of digits that we want to check/
console.log(usableurl2)

const webUrl3 = "https://pwskills.com/shourya%20shri"

const usableurl3=webUrl.replace(/%\d\d/,'-')
console.log(usableurl3)