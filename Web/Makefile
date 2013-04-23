all: upload

build:
	jekyll

server:
	jekyll --server --auto&

upload: build
	rsync -pvtrlL --cvs-exclude --delete _site/ cirdan:websites/festivalek.cz

clean:
	rm -rf _site
