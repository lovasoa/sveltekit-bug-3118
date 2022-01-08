


import sqlite3 from 'sqlite3';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
		return {
			body: "Hello world "
		};
}
