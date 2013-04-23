function installPickMarker() {
    var menu = document.getElementById("menu");
    var links = menu.getElementsByTagName("a");
    var currentPath = window.location.pathname;
    for (var i=0; i<links.length; i++) {
        var link = links[i];
        if (link.href.indexOf(currentPath) != -1) {
            var pick = document.createElement("div");
            pick.id = "pick";
            link.parentNode.insertBefore(pick, link.nextSibling);
        }
    }
}

window.onload = installPickMarker;
