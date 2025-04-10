document.addEventListener("DOMContentLoaded", function () {
    // Carregar footer
    const footer = document.getElementById("footer");
    if (footer) {
        fetch("./footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar o footer.");
                return response.text();
            })
            .then(data => footer.innerHTML = data)
            .catch(error => console.error("Erro ao carregar o footer:", error));
    }

    // Carregar nav
    const nav = document.getElementById("menu");
    if (nav) {
        fetch("./menu.html")
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar o nav.");
                return response.text();
            })
            .then(data => nav.innerHTML = data)
            .catch(error => console.error("Erro ao carregar o nav:", error));
    }
});
