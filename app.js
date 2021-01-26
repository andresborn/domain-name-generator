let pronoun = ['the', 'our', "his", "theirs", "my", "your", "her","their",]
let adj = ["ugliest", "ugly", "uptight", "victorious", "vivacious", "wandering", "wicked", "wild",]
let noun = ["Belgium","Candle","Sandwich","Juice","Caravan","Kangaroo","King","Shampoo",]
let end = [".COM",".cat",".net",".coop",".edu",".gov",".name",".tel",]

const createUrls = (arr1, arr2, arr3, arr4) => {
	let urlArray = [];
	arr1.forEach((num1) => {
		arr2.forEach((num2) => {
			arr3.forEach((num3) => {
				arr4.forEach((num4) => {
					const str = (num1 + num2 + num3 + num4).toLowerCase()
					urlArray.push(str)
				})
			})
		})
	})
	return urlArray
}
console.log(createUrls(pronoun, adj, noun, end))