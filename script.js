// Function to fetch JSON data and content from each object 
async function displaySummaryItems() {
    try {
      // Fetch the JSON file using Fetch API
      const response = await fetch('./data.json');
      const data = await response.json();
  
      // Get the container div where we will display the summary items
      const container = document.getElementById('right-side');
    //   const categoryDiv = document.getElementById('item');
  
      // Loop through each object and create a div for it
      for(let i = 0; i < data.length; i++){

        const summaryItemDiv = document.createElement('div');
        summaryItemDiv.classList.add('summary-item');
        summaryItemDiv.style.background = `${data[i].background}`;
        container.appendChild(summaryItemDiv);

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
      container.appendChild(buttonDiv);

      const summaryHeading = document.createElement('h2');
      summaryHeading.textContent = 'Summary';
      container.insertBefore(summaryHeading, container.firstElementChild);



    } catch (error) {
      console.error('Error fetching or displaying data:', error);
    }
  }
  
  // Call the function to display the subject marks when the page loads
  displaySummaryItems(); 