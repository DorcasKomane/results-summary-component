// Function to fetch JSON data and content from each object 
async function displaySummaryItems() {
    try {
      // Fetch the JSON file using Fetch API
      const response = await fetch('./data.json');
      const data = await response.json();
  
      // Get the container div where we will display the summary items
      const rightContainer = document.getElementById('right-side');
      const leftContainer = document.getElementById('left-side');

      //set up variables to be used to calculate final result
      let sum = 0;
  
      // Loop through each object and create the necessary divs for its contents 
      for(let i = 0; i < data.length; i++){

        sum += data[i].score;

        const summaryItemDiv = document.createElement('div');
        summaryItemDiv.classList.add('summary-item');
        summaryItemDiv.style.background = `${data[i].background}`;
        rightContainer.appendChild(summaryItemDiv);

        const itemTitleDiv = document.createElement('div');
        itemTitleDiv.classList.add('item-title');
        summaryItemDiv.style.color = `${data[i].color}`;
        summaryItemDiv.appendChild(itemTitleDiv);
        
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.src = `${data[i].icon}`;
        itemTitleDiv.appendChild(icon);

        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('item');
        categoryDiv.classList.add('summary-item-name');
        categoryDiv.innerHTML = `${data[i].category}`;
        itemTitleDiv.appendChild(categoryDiv);

        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('item-score');
        scoreDiv.style.color = 'black';
        summaryItemDiv.appendChild(scoreDiv);

        const topScoreDiv = document.createElement('span');
        topScoreDiv.classList.add('item-score-top');
        topScoreDiv.innerHTML = `${data[i].score}`;
        scoreDiv.appendChild(topScoreDiv);

        const bottomScoreDiv = document.createElement('span');
        bottomScoreDiv.classList.add('item-score-bott');
        bottomScoreDiv.innerHTML = `/ 100`;
        scoreDiv.appendChild(bottomScoreDiv);

      }

      const buttonDiv = document.createElement('button');
      buttonDiv.classList.add('btn');
      buttonDiv.innerHTML = `Continue`;
      rightContainer.appendChild(buttonDiv);

      const summaryHeading = document.createElement('h2');
      summaryHeading.textContent = `Summary`;
      rightContainer.insertBefore(summaryHeading, rightContainer.firstElementChild);

      // LEFT-SIDE
      const resultHeading = document.createElement('h1');
      resultHeading.textContent = `Your Result`;
      leftContainer.insertBefore(resultHeading, leftContainer.firstElementChild);

      const resultDiv = document.createElement('div');
      resultDiv.classList.add('middle');
      leftContainer.appendChild(resultDiv);

      const scoreSpan = document.createElement('span');
      scoreSpan.classList.add('score');
      scoreSpan.innerHTML = `${Math.floor(sum / data.length)}`;
      resultDiv.appendChild(scoreSpan);

      const subTextSpan = document.createElement('span');
      subTextSpan.classList.add('sub-text');
      subTextSpan.innerHTML = `of 100`;
      resultDiv.appendChild(subTextSpan);

      const bottomTitleSpan = document.createElement('span');
      bottomTitleSpan.classList.add('bottom-title');
      bottomTitleSpan.innerHTML = `Great`;
      leftContainer.appendChild(bottomTitleSpan);

      const par = document.createElement('p');
      par.innerHTML = `You scored higher than 65% of the people who have taken these tests.`;
      leftContainer.appendChild(par);

    } catch (error) {
      console.error('Error fetching or displaying data:', error);
    }
  }
  
  // Call the function to display the subject marks when the page loads
  displaySummaryItems(); 