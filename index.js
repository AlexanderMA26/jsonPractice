import data from './rawBooks.json' with { type: 'json' };



let total = 0;
let audio = 0;
let read = 0;
const genre = [];
const author = [];
const diff = [];
const month = [];

for (let i = 0; i< data.length; i++){
    let x = data[i]["Date Bought"].split(" ")[0]
    month.push(x);



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
    var genres = {};
    var maxgenre = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(genres[el] == null)
            genres[el] = 1;
        else
            genres[el]++;  
        if(genres[el] > maxCount)
        {
            maxgenre = el;
            maxCount = genres[el];
        }
    }
    return maxgenre;
}

console.log(mode(genre) + " is your most popular genre.");
console.log(mode(author) + " is your most read author.");
console.log(mode(month) + " is the month when you buy the most books.");




//Question 6


for (let i in data){
    if ((data[i]["read?"] == "Yes") && (data[i]["Time on TBR (days)"] > 0)){
        if (data[i]["Time on TBR (years)"] < 10)  {

            diff.push(data[i]["Time on TBR (days)"]);
        }
        
    }
}

const average = array => array.reduce((a, b) => a + b) / array.length;
console.log("The average amount of time a book spends on the tbr list is " + average(diff).toFixed(1) + " days.");