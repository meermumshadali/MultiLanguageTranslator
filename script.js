function translateText() {
    const text = document.getElementById("inputText").value;
    const fromLang = document.getElementById("fromLang").value;
    const toLang = document.getElementById("toLang").value;

    if (text.trim() === "") {
        alert("Please enter text");
        return;
    }

    const url =
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("outputText").value =
                data.responseData.translatedText;
        })
        .catch(error => {
            alert("Translation failed");
            console.error(error);
        });
}
