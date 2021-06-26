const gifs = ["oldTheresa.gif", "cheekyBorris.gif", "emotiveHancock.gif"];
function theToryTumbler() {
    var tory = Math.floor(Math.random() * ((gifs.length - 1) - 0 + 1)) + 0;
    console.log(tory);
    document.getElementsByTagName("body")[0].style.backgroundImage = `url(gifs/${gifs[tory]})`;
}

