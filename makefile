 #!/usr/bin/make -sf

# force use of Bash
SHELL := /bin/bash
INTERACTIVE=true
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

.PHONY: default
default: tests

.PHONY: tests
tests:
	clear
	cd ${ROOT_DIR}/server; yarn test
	cd ${ROOT_DIR}/frontend; yarn test:ci


.PHONY: install
install:
	cd ${ROOT_DIR}/server; yarn install
	cd ${ROOT_DIR}/frontend; yarn install

.PHONY: start
start:
	cd ${ROOT_DIR}/server; yarn start:dev &
	cd ${ROOT_DIR}/frontend; yarn start &
