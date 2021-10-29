export class Events {

	constructor() {
		this.events = {};
	}

	on(event, callback) {
		this.events[event] = this.events[event] || [];
		this.events[event].push(callback);
	}

	emit(event, data) {
		(this.events[event] || []).forEach((callback) => callback(data));
	}

	off(event, callback) {
		if (!this.events[event]) {
			return;
		}

		this.events[event] = this.events[event].filter(c => c.toString() != callback.toString());
	}

	static getInstance() {
		if (!Events.instance) {
			Events.instance = new Events();
		}
		return Events.instance;
	}
}