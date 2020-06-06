PROJECT := krishi-swarajya-ui
PLATFORM := $(shell uname -s | tr '[:upper:]' '[:lower:]')-$(shell uname -m)

.PHONY: all
all: dist

# Distribution
.PHONY: dist dist-upload
dist: node_modules
	@npm run build --silent

# Development
.PHONY: develop
develop: node_modules
	@npm start --silent

.PHONY: lint
lint: node_modules
	@npm run lint --silent

# Clean
.PHONY: clean distclean
clean:
	$(RM) -R _build/

distclean: clean
	$(RM) -R node_modules

# Internals
node_modules: package.json
	npm prune
	npm install
	touch "$@"
