const reader = <T>(value: T) => {
	const state = $state(value);

	return {
		get state() {
			return state;
		}
	};
};

const sappho = <T>(value: T) => {
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

export { reader, sappho, sappho as writer };
