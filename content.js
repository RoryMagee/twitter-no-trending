function removeTrending() {
    let trending = document.querySelector("div[data-testid='sidebarColumn']");
    if (trending) {
        trending.remove();
    }
    setTimeout(() => {
        removeTrending();
    }, 200);
}

removeTrending();
