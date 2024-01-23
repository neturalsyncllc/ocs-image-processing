function generateImage() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === '') {
        alert('Please enter text before generating an image.');
        return;
    }

    // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
    const apiKey = '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';

    fetch('https://api.openai.com/v1/images', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: inputText,
            model: 'image-alpha-001', // Update with the appropriate model
        })
    })
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.url;
        const outputImage = document.getElementById('outputImage');
        outputImage.src = imageUrl;
        document.getElementById('outputImageContainer').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while generating the image. Please try again.');
    });
}
