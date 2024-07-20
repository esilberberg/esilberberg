function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', () => {
        closeNav();
    });
});