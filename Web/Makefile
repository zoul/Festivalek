all: upload

build:
	jekyll build

server:
	jekyll serve --watch

upload: build
	rsync -pvtrlL --cvs-exclude --delete _site/ cirdan:websites/festivalek.cz

clean:
	rm -rf _site
