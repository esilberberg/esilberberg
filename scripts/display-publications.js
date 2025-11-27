// Reads Google Sheet and formats publications for display on the site.

const urlPublications = "https://docs.google.com/spreadsheets/d/1-uvRMT8881ia2G3HVkMLVbj1m_uEDKey0de0DAJQtxA/export?format=csv";

const articles = document.querySelector("#articles");
const chapters = document.querySelector("#chapters");

let articlesHTML = '';
let chaptersHTML = '';

fetch(urlPublications)
    .then(result => {
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        return result.text();
    })
    .then(function(csvtext) {
        return csv().fromString(csvtext);   
    })
    .then(function(csvData) {
        csvData.forEach(function(row) {
            const coauthorsList = row.Coauthors 
                ? `<span> With ${row.Coauthors}. </span>` 
                : '';
            const awards = row.Additional_Info 
                ? `<span>🏅 ${row.Additional_Info}</span>` 
                : '';

            const itemHTML = `<div class="publication-item">
                <h3><a target="_blank" href="${row.URL}">${row.Title}</a></h3>
                <p>${coauthorsList}<span class="source">${row.Source}</span>, ${row.Year}.</p>
                <p class="awards">${awards}</p>
            </div>`

            if (row.Type === "article") {
                articlesHTML += itemHTML;
            } else if (row.Type === "chapter") {
                chaptersHTML += itemHTML;
            }
        });
        
        if (articles) {
            articles.innerHTML = articlesHTML;
        }
        if (chapters) {
            chapters.innerHTML = chaptersHTML;
        }
    })
    .catch(error => {
        console.error("Error fetching or processing publications:", error);
    });