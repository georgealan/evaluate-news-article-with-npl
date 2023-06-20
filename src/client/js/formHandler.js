// Get actual Year
let today = new Date()
let date = today.getFullYear()
const actualYear = document.getElementById('date')
actualYear.innerText = date

const handleSubmit = async (e) => {
	e.preventDefault()

	let text = document.getElementById('text-input').value
	console.log('::: Form Submitted :::')
	console.log("User's text input is: ", text)

    try {
        const response = await fetch('/meaningAPI', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        })
        const data = await response.json()
        updateUI(data)
    } catch (error) {
        console.log('Error', error)
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
            return 'Strong Positive'
        case 'P':
            return 'Positive'
        case 'NEU':
            return 'Neutral'
        case 'N':
            return 'Negative'
        case 'N+':
            return 'Strong Negative'
        case 'NONE':
            return 'Without Sentiment'
    }
}

export { handleSubmit, updateUI }
