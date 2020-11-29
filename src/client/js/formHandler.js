
function handleSubmit(event) {
    try {


        event.preventDefault()

        let formText = document.getElementById('name').value

        Client.checkForName(formText)
        let data = { formText: formText }
        console.log("::: Form Submitted :::")
        fetch('http://localhost:3030/fetch_api', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header        
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                console.log(res.sentence_list[0].score_tag)
                


                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('polarity').innerHTML = res.sentence_list[0].score_tag
                document.getElementById('agreement').innerHTML = res.sentence_list[0].agreement
                document.getElementById('confidence').innerHTML = res.sentence_list[0].confidence
                document.getElementById('text').innerHTML = res.sentence_list[0].text

            })
    } catch (error) {
        console.log("error", error);
    }
}





export { handleSubmit }

















