
build: components index.js
	@component build --dev

index.js: support/build lib/client.js lib/console.js lib/log-worker.js lib/util.js
	support/build > index.js

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean
