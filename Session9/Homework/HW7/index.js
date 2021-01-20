async function getData() {
    let fetchPromise = await fetch('http://quotes.rest/qod.json');
    return fetchPromise.json();
}
getData().then(
    result => {
        console.log(result);
        let quoteText = result.contents.quotes[0].quote;
        let quoteAuthor = result.contents.quotes[0].author;
        document.getElementById("quote").insertAdjacentHTML("beforeend", quoteText);
        document.getElementById("author").insertAdjacentHTML("beforeend", `-${quoteAuthor}-`);
    }
)