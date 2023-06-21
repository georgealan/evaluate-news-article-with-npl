import { checkUrl } from '../src/client/js/urlChecker'

describe("Testing url validation for correct url", () => {
	let url = "https://www.udacity.com/"
	test("Return true", () => {
		const response = checkUrl(url)
		expect(response).toBeDefined()
		expect(response).toBeTruthy()
	})
})

describe("Testing url validation for incorrect url", () => {
	let url = "How is your day today?"
	test("Return false", () => {
		const response = checkUrl(url)
		expect(response).toBeDefined()
		expect(response).toBeFalsy()
	})
})