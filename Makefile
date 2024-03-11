.PHONY: run
dev:
	ionic serve
start:
	ionic capacitor run android -l --external
build:
	ionic cap copy	