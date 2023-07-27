// fetch('./data.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });

let icon = document.querySelector('#icon');
let category = document.querySelector('#item');
let itemScore = document.querySelector('#itemScore');


fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        for(let i = 0; i < data.length; i++){
            icon.src = data[i].icon;
            category.innerText = data[i].category;
            itemScore.innerText = data[i].score;
        }
    })
    .catch( err => {
        console.log(`error ${err}`);
    });