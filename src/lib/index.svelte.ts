const reader = <T>(value: T) => {
	const state = $state(value);

	return {
		get state() {
			return state;
		}
	};
};

const writer = <T>(value: T) => {
	let state = $state(value);

	return {
		get state() {
			return state;
		},
		set state(val: T) {
			state = val;
		}
	};
};

type Store<S> = {
	get: () => S;
};

const deriver = <T, S>(stores: Store<S>[], deriveFn: (...values: S[]) => T) => {
	const derivedState = $derived.by(() => deriveFn(...stores.map((store) => store.get())));

	return {
		get state() {
			return derivedState;
		}
	};
};

const resetter = <T>(value: T) => {
	const initial = value;
	let state = $state(value);

	return {
		get state() {
			return state;
		},
		set state(val: T) {
			state = val;
		},
		reset() {
			state = initial;
		}
	};
};

const persister = <T>(key: string, initialValue: T) => {
	const stored = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
	let state = $state(stored ? JSON.parse(stored) : initialValue);

	const _sync = $derived(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(state));
		}
	});

	return {
		get state() {
			return state;
		},
		set state(val: T) {
			state = val;
		},
		_sync
	};
};

export { persister, reader, resetter, writer, deriver };
