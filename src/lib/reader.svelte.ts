const reader = <T>(value: T) => {
	const state = $state(value);

	return {
		get state() {
			return state;
		}
	};
};

export { reader };
