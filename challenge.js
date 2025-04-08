import data from './rawBooks.json' with { type: 'json' };

let year = [];
for (let i = 0; i< data.length; i++){
    //Retriving the year bought from each book
    if (data[i]["Date Bought"] != ""){
    let x = data[i]["Date Bought"].split(", ")[1]
    year.push(x);
    }
    
}

// A function to find which year appears the most
function mode(array)
{
    let rerun = [];
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
    //Putting both the year and how many instances of it in a list, and later printing both elements.
    rerun.push(maxgenre);
    rerun.push(genres[el]);
    return rerun;
}

console.log("You bought the most books in " + mode(year)[0] + " when you bought " + mode(year)[1] + " books.");

