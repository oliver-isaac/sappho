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

const persister = <T>(key: string, initialValue: T) => {
	const stored = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
	let state = $state(stored ? JSON.parse(stored) : initialValue);

	$effect.root(() => {
		$effect(() => {
			if (typeof window !== 'undefined') {
				localStorage.setItem(key, JSON.stringify(state));
			}
		});
	});

	return {
		get state() {
			return state;
		},
		set state(val: T) {
			state = val;
		}
	};
};

export { persister, reader, writer };
