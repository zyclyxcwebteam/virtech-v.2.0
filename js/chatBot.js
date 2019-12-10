function show(x) {
    if (x == 0) {
        document.getElementById("box1").style.display = "none"
    }
    else {

        document.getElementById("box1").style.display = "inline"
    }
}



// Page Loading Indicator
$(window).on('load', function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    // Chat bot 
    let messagesElement = document.getElementById("botMessages");

    document.getElementById('bot-form').addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        let userText = document.getElementById('userText').value;

        // Check for Empty user input here
        messagesElement.innerHTML += `<p id="userReplay">${userText}</p>`

        fetch('https://ancient-anchorage-09006.herokuapp.com/virtech/', {
        // fetch('http://localhost:3000/virtech/', {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ text: userText })
        })
            .then(function (response) {
                // disable input and add loading wheel
                return response.json();
            })
            .then(function (output) {                                  
                document.getElementById('userText').value = '';

                if(output.response){

                if (output.response[0].text) {
                    messagesElement.innerHTML += `<p id="botReplay">${output.response[0].text}</p>`
                }

                if (output.response[0].title) {
                    messagesElement.innerHTML += `<p id="botReplay">${output.response[0].title}</p>`;
                }

                if (output.response[0].description) {
                    messagesElement.innerHTML += `<p id="botReplay">${output.response[0].description}</p>`;
                }

                if (output.response[0].options) {
                    let html = `<p id="botReplay"> `;
                    html += output.response[0].options.map(function (option) {
                        return option.value.input.text;
                    }).join(', ')
                    html += '</p>';
                    messagesElement.innerHTML += html;
                }
            }
            })
            .then(function(){
                // Enable input and remove loading wheel
            })             
    });
})