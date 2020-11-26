.PHONY: dev
dev:
	docker run -t -i -v `pwd`:/usr/app -w /usr/app --rm --name eslint-config-pz node:12-alpine

.PHONY: shell
shell:
	docker exec -it eslint-config-pz sh