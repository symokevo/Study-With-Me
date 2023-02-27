function loadBody () {
    let currentCards = localStorage.getItem("cards")
    if (currentCards == null) {
      currentCards = []
    }else{
      currentCards = JSON.parse(currentCards)
    }
   
    let htmlText = ""
    for (let i = 0; i < currentCards.length; i++) {
      htmlText += 
      `<div class="card" onclick="handleState(${i})">
        <h2>${currentCards[i].question}</h2>
        <div id="card-${i}">
          <p>${currentCards[i].answer}</p>
          <button onclick="handleDelete(${i})">Remove</button>
        </div>
      </div>`
    }
   
    document.getElementById("card-container").innerHTML = htmlText
  }