export function enumToStrMapFactory(enumerated: any) {
	let mapping = new Map();
	Object.values(enumerated)
		.filter(val => typeof val !== "number")
		.forEach(str => mapping.set(enumerated[str], str));
	return mapping;
};
