// Reads Google Sheets and then formats data for display under 'projects' tab in main section.

const urlPublications = "https://docs.google.com/spreadsheets/d/1-uvRMT8881ia2G3HVkMLVbj1m_uEDKey0de0DAJQtxA/export?format=csv";
const urlPresentations = "https://docs.google.com/spreadsheets/d/1cB74Dhj8jr4qjh5r51jKeeQQl4pQFdCBfiPys7rQTnw/export?format=csv";
const urlOrganization = "https://docs.google.com/spreadsheets/d/1HeYd8UPnwLvBn04EUSKWkaOrTYeAE_wmraatWRrCceY/export?format=csv";

const pubs = document.querySelector("#publications");
const present = document.querySelector("#presentations");
const org = document.querySelector("#organization");

fetch(urlPublications).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        pubs.innerHTML += '<div class="research-item"><h4><a target="_blank" href="' + row.URL + '">' + row.Title + '</a></h4><p class="research-description">' + row.Journal + ' (' + row.Year + ') ' + '</p></div>';
    });
});

fetch(urlPresentations).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        present.innerHTML += '<div class="research-item"><h4>' + row.Title + '</h4><p class="research-description">' + row.Conference + ' (' + row.Year + ') ' + '</p></div>';
    });
});

fetch(urlOrganization).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        org.innerHTML += '<div class="research-item"><h4>' + row.Title + '</h4><p class="research-description">' + row.Conference + ' (' + row.Year + ') ' + '</p></div>';
    });
});
