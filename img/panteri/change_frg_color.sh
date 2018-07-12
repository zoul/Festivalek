for i in *.png ; do convert "$i" -fuzz 80% -fill white -opaque '#efe53b' "$i" ; done

