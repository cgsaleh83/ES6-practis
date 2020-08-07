// const ages = [14, 16, 15, 26];
// const ages2 = [15, 544, 5, 7];
// const ages3 = [15, 544, 5, 8];
// const allAges = ages.concat(ages2).concat(ages3).concat(700);
// console.log(allAges)

const ages = [14, 16, 15, 26];
const ages2 = [15, 544, 5, 7];
const ages3 = [15, 544, 5, 8];
const allAges = ages.concat(ages2).concat(ages3).concat(700);
const allAge2 = [...ages, ...ages2, ...ages3, 700]
console.log(allAge2);