window.onload = function()
{
    var padding = 5;
    var images = document.getElementsByTagName("img");
    var maxWidth = document.getElementById("gallery").offsetWidth - 2;

    var clipBy = function(element, amount) {
        var wrapper = document.createElement("div");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.marginBottom = padding + "px";
        wrapper.style.marginRight = padding + "px";
        element.style.marginLeft = "-" + amount + "px";
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
    };

    var layoutLine = function(batch, overhang) {
        var clipWidth = Math.ceil(overhang / batch.length);
        var clipError = overhang - (clipWidth * batch.length);
        for (var j=0; j<batch.length; j++) {
            var roundingBonus = (j == 0) ? clipError : 0;
            clipBy(batch[j], clipWidth + roundingBonus);
        }
    };

    var i = 0;
    var lineWidth = 0;
    var batch = [];

    while (i < images.length) {
        image = images[i++];
        lineWidth += image.width;
        batch.push(image);
        var overhang = (lineWidth - maxWidth) + padding * batch.length;
        if (overhang >= 0) {
            layoutLine(batch, overhang);
            lineWidth = 0;
            batch = [];
        }
    }
};
