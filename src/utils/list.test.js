import { describe, it, expect } from 'vitest';
import { splitTodosIntoDays } from '/src/utils/list';


describe('splitTodosIntoDays', () => {
	it('splits todos into correct days', () => {
		const todos = [
			{ id: 1, text: 'Uppgift 1', day: 'mo' },
			{ id: 2, text: 'Lektion', day: 'mo' },
			{ id: 3, text: 'Uppgift 2', day: 'ti' },
			{ id: 4, text: 'Uppgift 3', day: 'on' },
			{ id: 5, text: 'Uppgift 4', day: 'to' },
			{ id: 6, text: 'Uppgift 5', day: 'fre' },
		];

		const result = splitTodosIntoDays(todos);

		expect(result[0]).toEqual([
			{ id: 1, text: 'Uppgift 1', day: 'mo' },
			{ id: 2, text: 'Lektion', day: 'mo' },
		]);
		expect(result[1]).toEqual([{ id: 3, text: 'Uppgift 2', day: 'ti' }]);
		expect(result[2]).toEqual([{ id: 4, text: 'Uppgift 3', day: 'on' }]);
		expect(result[3]).toEqual([{ id: 5, text: 'Uppgift 4', day: 'to' }]);
		expect(result[4]).toEqual([{ id: 6, text: 'Uppgift 5', day: 'fre' }]);
	});

	it('returns empty arrays for days with no todos', () => {
		const todos = [
			{ id: 1, text: 'Uppgift 1', day: 'mo' },
			{ id: 3, text: 'Uppgift 2', day: 'ti' },
		];

		const result = splitTodosIntoDays(todos);

		expect(result[0]).toEqual([{ id: 1, text: 'Uppgift 1', day: 'mo' }]);
		expect(result[1]).toEqual([{ id: 3, text: 'Uppgift 2', day: 'ti' }]);
		expect(result[2]).toEqual([]);
		expect(result[3]).toEqual([]);
		expect(result[4]).toEqual([]);
	});

	it('handles an empty todo list', () => {
		const todos = [];

		const result = splitTodosIntoDays(todos);

		expect(result[0]).toEqual([]);
		expect(result[1]).toEqual([]);
		expect(result[2]).toEqual([]);
		expect(result[3]).toEqual([]);
		expect(result[4]).toEqual([]);
	});
});