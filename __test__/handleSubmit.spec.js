import { handleSubmit } from '../src/client/js/formHandler'

describe('Testing the submit functionality', () => {
	test('submit for testing', () => {
			expect(handleSubmit).toBeDefined();
	});
})