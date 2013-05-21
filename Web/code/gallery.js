window.onload = function()
{
    var PADDING = 5;

    var images = document.getElementsByTagName("img");
    var maxWidth = document.getElementById("gallery").offsetWidth - 2;

    var clipBy = function(element, amount) {
        var wrapper = document.createElement("div");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.marginBottom = PADDING + "px";
        wrapper.style.marginRight = PADDING + "px";
        element.style.marginLeft = "-" + amount + "px";
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
    };

    var isLandscape = function(image) {
        return (image.width > image.height);
    }

    var filter = function(array, predicate) {
        var result = [];
        for (var i=0; i<array.length; i++)
            if (predicate(array[i]))
                result.push(array[i]);
        return result;
    }

    var layoutLine = function(images, overhang) {
        var landscapeImageCount = filter(images, isLandscape).length;
        var clipStep = Math.ceil(overhang / landscapeImageCount);
        var roundingError = overhang - clipStep * landscapeImageCount;
        for (var j=0; j<images.length; j++) {
            if (isLandscape(images[j])) {
                clipBy(images[j], clipStep + roundingError);
                roundingError = 0;
            } else {
                clipBy(images[j], 0);
            }
        }
    };

    var i = 0;
    var lineWidth = 0;
    var batch = [];

    while (i < images.length) {
        image = images[i++];
        lineWidth += image.width;
        batch.push(image);
        var overhang = (lineWidth - maxWidth) + PADDING * batch.length;
        if (overhang >= 0) {
            layoutLine(batch, overhang);
            lineWidth = 0;
            batch = [];
        }
    }
};
