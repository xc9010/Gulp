let a = {
	name:'xc9010',
	age: 28
}

let b = {
	name: 'xc',
	book: {
		title: 'javascript',
		price: 45
	}
}

let c = Object.assign(a, b)

console.log(JSON.stringify(c))

console.log(a === c)

b.name = 'change';
b.book.price = 55;

console.log(JSON.stringify(b))
console.log(JSON.stringify(a))
