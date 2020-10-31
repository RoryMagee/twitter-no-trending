function removeTrending() {
    let trending = document.querySelector("div[data-testid='sidebarColumn']");
    if (trending) {
        trending.remove();
    }
    setTimeout(() => {
        findTrending();
    }, 1000);
}

removeTrending();
