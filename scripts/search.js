// Handle the input & submission.
submit_handler = () => {
    var search_value = document.getElementById("search-box").value.toLowerCase()
    console.log(search_value)
    document.getElementById("search-box").value = ""
};