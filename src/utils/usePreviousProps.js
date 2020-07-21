import { useRef, useEffect } from 'react';

export const usePreviousProp = (prop) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = prop;
	});
	return ref.current;
};
