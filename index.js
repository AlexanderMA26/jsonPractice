import data from './rawBooks.json' with { type: 'json' };



let total = 0;
let audio = 0;
let read = 0;
const genre = [];
const author = [];

for (let i = 0; i< data.length; i++){
    if ((data[i]["read?"] == "Yes") || (data[i]["read?"] == "Yes!")){
        read += 1;
        author.push(data[i].author);
    }
    if ((data[i]["audio?"] == "Yes") || (data[i]["audio?"] == "Yes!")){
        audio += 1;
    }
    genre.push(data[i].category);

    total +=1

    
}

let peread = (read/total)*100;
peread = peread.toFixed(2)
//Question 1
console.log("You hav read "+ peread + "% of your total books.");
//Question 2
console.log(audio + " of the books have accompanying audiobooks.")



function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

console.log(mode(genre) + " is your most popular genre.");
console.log(mode(author) + " is your most read author.");





// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));