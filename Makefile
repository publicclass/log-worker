
build: components index.js
	@component build --dev

index.js: client.js console.js log-worker.js util.js
	cat util.js console.js log-worker.js > worker.js


components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
