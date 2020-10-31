function removeTrending() {
    let trending = document.querySelector("div[data-testid='sidebarColumn']");
    if (trending) {
        trending.remove();
    }
    setTimeout(() => {
        removeTrending();
    }, 1000);
}

removeTrending();
