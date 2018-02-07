node_modules := ./node_modules/.bin

dev:
	bsb -make-world -w  

build:
	bsb -make-world

clean:
	bsb -clean-world
