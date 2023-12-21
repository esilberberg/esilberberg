// Reads Google Sheets and then formats data for display under 'projects' tab in main section.

const urlPublications = "https://docs.google.com/spreadsheets/d/1-uvRMT8881ia2G3HVkMLVbj1m_uEDKey0de0DAJQtxA/export?format=csv";

const pubs = document.querySelector("#publications");

fetch(urlPublications).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        pubs.innerHTML += '<div class="publication-item"><h3><a target="_blank" href="' + row.URL + '">' + row.Title + '</a></h3><p class="publication-description">' + row.Journal + ' (' + row.Year + ') ' + '</p></div>';
    });
});
