import { checkUrl } from "./urlChecker"

const handleSubmit = async (e) => {
	e.preventDefault()

	let url = document.getElementById('text-input').value
	console.log('::: Form Submitted :::')
	console.log("User's text input is: ", url)

    if (checkUrl(url) == true) {
        try {
            const response = await fetch('/meaningAPI', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ url: url }),
            })
            const data = await response.json()
            updateUI(data)
        } catch (error) {
            console.log('Error', error)
        }
    } else {
        alert("Invalid URL! Please provide another one!");
    }
}

const updateUI = async (response) => {
	document.getElementById('polarity').innerHTML = checkPolarity(response.score_tag)
	document.getElementById('agreement').innerHTML = response.agreement
	document.getElementById('subjectivity').innerHTML = response.subjectivity
	document.getElementById('confidence').innerHTML = response.confidence
	document.getElementById('irony').innerHTML = response.irony
}

function checkPolarity(value) {
    switch(value) {
        case 'P+':
            return 'STRONG POSITIVE'
        case 'P':
            return 'POSITIVE'
        case 'NEU':
            return 'NEUTRAL'
        case 'N':
            return 'NEGATIVE'
        case 'N+':
            return 'STRONG NEGATIVE'
        case 'NONE':
            return 'WITHOUT SENTIMENT'
    }
}

export { handleSubmit, updateUI }
