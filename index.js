
document.querySelectorAll(".where").forEach((element) => {



    element.addEventListener("click", () => {

        document.querySelectorAll(".where").forEach((e) => {
            e.classList.remove("active");
        })
        element.classList.add("active");
    })
});

document.querySelectorAll(".season").forEach((element) => {



    element.addEventListener("click", () => {

        document.querySelectorAll(".season").forEach((e) => {
            e.classList.remove("active");
        })
        element.classList.add("active");
    })
});


document.querySelectorAll(".occasion").forEach((element) => {



    element.addEventListener("click", () => {

        document.querySelectorAll(".occasion").forEach((e) => {
            e.classList.remove("active");
        })
        element.classList.add("active");
    })
});


document.querySelector(".submit").addEventListener("click", () => {

    var a = [];
    document.querySelectorAll(".active").forEach((e) => { a.push(e.innerHTML) })

    var slide_avg = parseInt(document.getElementById("sad_happy").value) + parseInt(document.getElementById("stressed_relaxed").value) +
        parseInt(document.getElementById("lonely_romantic").value) + parseInt(document.getElementById("couchpotato_party").value);
    var my_json = {
        "slideavg": slide_avg,
        "season": a[0],
        "occasion": a[1]

    };

    // console.log(my_json);
    // console.log(my_json.sad_happy);

    showdrink(my_json);

})


var tail = [{
    image: "./tails/cosmopoltian.jpg",
    slideavg: 1,
    season: "Summer",
    occasion: "Weekend"
},
{
    image: "./tails/daiquiri.jpg",
    slideavg: 7,
    season: "Summer",
    occasion: "Birthday"
},

{
    image: "./tails/dark_and_stormy.jpg",
    slideavg: 11,
    season: "Summer",
    occasion: "Festival"
},

{
    image: "./tails/french_75.jpg",
    slideavg: 17,
    season: "Summer",
    occasion: "Other"
},

{
    image: "./tails/gimlet.jpg",
    slideavg: 24,
    season: "Winter",
    occasion: "Weekend"
},

{
    image: "./tails/manhattan.jpg",
    slideavg: 29,
    season: "Winter",
    occasion: "Birthday"
},

{
    image: "./tails/martinez.jpg",
    slideavg: 30,
    season: "Winter",
    occasion: "Festival"
},

{
    image: "./tails/martini.jpg",
    slideavg: 39,
    season: "Winter",
    occasion: "Other"
},

{
    image: "./tails/mimosa.jpg",
    slideavg: 40,
    season: "Autumn",
    occasion: "Weekend"
},

{
    image: "./tails/mint_julep.jpg",
    slideavg: 28,
    season: "Autumn",
    occasion: "Birthday"
},

{
    image: "./tails/mojito.jpg",
    slideavg: 20,
    season: "Autumn",
    occasion: "Festival"
},

{
    image: "./tails/moscow_mule.jpg",
    slideavg: 27,
    season: "Autumn",
    occasion: "Other"
},

{
    image: "./tails/negroni.jpg",
    slideavg: 25,
    season: "Spring",
    occasion: "Weekend"
},

{
    image: "./tails/old_fashioned.jpg",
    slideavg: 10,
    season: "Spring",
    occasion: "Birthday"
},


{
    image: "./tails/paloma.jpg",
    slideavg: 13,
    season: "Spring",
    occasion: "Festival"
},

{
    image: "./tails/pimm's_cup.jpg",
    slideavg: 12,
    season: "Spring",
    occasion: "Other"
},

{
    image: "./tails/sazerac.jpg",
    slideavg: 21,
    season: "Summer",
    occasion: "Weekend"
},

{
    image: "./tails/sidecar.jpg",
    slideavg: 8,
    season: "Autumn",
    occasion: "Birthday"
},

{
    image: "./tails/spritz.jpg",
    slideavg: 28,
    season: "Spring",
    occasion: "Festival"
},

{
    image: "./tails/tom_collins.jpg",
    slideavg: 19,
    season: "Winter",
    occasion: "Weekend"
},

{
    image: "./tails/vesper.jpg",
    slideavg: 34,
    season: "Summer",
    occasion: "Other"
},

{
    image: "./tails/whiskey_sour.jpg",
    slideavg: 27,
    season: "Autumn",
    occasion: "Festival"
},

{
    image: "./tails/margarita.jpg",
    slideavg: 25,
    season: "Winter",
    occasion: "Birthday"
}];



function showdrink(my_json) {


    // console.log("showing user in");
    // console.log(my_json);


    //filtering tails on basis of occasion and seasons
    var filtered_tails_by_occasion = tail.filter(t => t.occasion == my_json.occasion);


    // console.log("showing occasions");
    // console.log(filtered_tails_by_occasion);


    var filtered_tails_by_season = filtered_tails_by_occasion.filter(t => t.season == my_json.season);

    // calculating index the tail with min diff from data
    var user_slideavg_in = my_json.slideavg;
    var min_index = 0, min_value = 50;

    // console.log("showing seasons");
    // console.log(filtered_tails_by_season);


    // console.log("calc for slider");

    filtered_tails_by_season.forEach(function (item, index) {

        var diff = Math.abs(item.slideavg - user_slideavg_in);
        // console.log(diff, item);

        if (diff < min_value) {
            min_index = index;
            min_value = diff;
        }
    });

    // console.log(filtered_tails_by_season[min_index]);

    var img = document.createElement('img');
    img.src = filtered_tails_by_season[min_index].image;
    img.classList.add("img-rounded", "tailimg");
    img.style.width = "350";
    img.style.height = "400px";


    document.getElementById('image_insert').innerHTML = '';
    document.getElementById('image_insert').appendChild(img);

    //for debugging
    console.log("user input avg: " + my_json.slideavg);
    console.log("tails found: " + filtered_tails_by_season.length);



}