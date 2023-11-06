// place files you want to import through the `$lib` alias in this folder.

export function slugify(text: string) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en', {
		dateStyle: 'long'
	}).format(date);
}
