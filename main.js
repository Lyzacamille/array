// 1 array of cities
const gotCitiesCSV ="King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
var citySplit = gotCitiesCSV.split(",")
console.log(citySplit);

//2 words of cities
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
var bestSplit = bestThing.split(" ");
console.log(bestSplit);

// 3 semicolon instead of commas
var citySplit2 = citySplit.join(";");
console.log(citySplit2);

//4 equall
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
var lotrCitiesString = lotrCitiesArray.join(",");
console.log(lotrCitiesString);

// 5 last 5 cities
console.log(lotrCitiesArray.slice(3));

// 6 use splice to remove Rohan 
var pos = lotrCitiesArray.indexOf("Rohan")
console.log(pos)
 lotrCitiesArray.splice(pos,1);
console.log(lotrCitiesArray);

// 7 slice display characters 23rd & 38th position
var b = bestThing.slice(23,38);
console.log(b);

// 8 Find and display the index of "only" in bestThing
var indexOnly = bestThing.indexOf("only");
var only = bestThing.slice(indexOnly,indexOnly + 4);
console.log(indexOnly);

// 9 Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
    
        for (let city of citySplit ){
            if( city.includes("aa") ||
            city.includes("ee") ||
            city.includes("ii") ||
            city.includes("oo") ||
            city.includes("uu") ) {
                console.log(city);
            }        

        }

// 10 Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
console.log(lotrCitiesArray.sort((a, b ) => {
return a.length-b.length;

})
)




