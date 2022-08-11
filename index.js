const getQuerySubmit = document.getElementById('getQuerySubmit');
const queryInput = document.getElementById('query-input');

const responseSection = document.getElementsByClassName('response-area')[0];

getQuerySubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/inventory?item=${queryInput.value}`)
        .then(res => addToView(res.data))
});

function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}


function createfortune(event) {
    event.preventDefault()
    console.log('function envoked')
        const fortuneInput = document.querySelector('#fortune-text') 
        const body = {
        newFortune: fortuneInput.value
        }
        axios.post("http://localhost:4000/api/addForture", body)
        .then((response) => {
        
        console.log(response.data)
        const fortuneInput = document.getElementById("#fortune-text")
        
        })
}

enterfortuneButton = document.getElementById("addFortuneButton")
enterfortuneButton.addEventListener("click", createfortune)
