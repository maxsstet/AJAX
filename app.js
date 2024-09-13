const $searchInput = $("#gifInput");
const $gifArea = $("#gif-area");

function addGif(res){
    let numResults = res.data.length;
    if (numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {class: "new-col"});
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "new-gif"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}



$("#gifForm").on("submit", async function (evt) {
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

$("#remove").on("click", function() {
    $gifArea.empty();
});