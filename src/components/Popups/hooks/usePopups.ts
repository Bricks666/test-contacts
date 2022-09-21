import { useEffect, useMemo, useRef, useState } from 'react';
import { GET_PARAMS } from '@/consts/getParams';
import useGetParams from '@/hooks/useGetParams';

export interface UsePopupsResult {
	readonly mountedPopups: string[];
	readonly popups: string[];
}

const parsePopups = (rawPopups: string | null): string[] => {
	return rawPopups ? rawPopups.split(',') : [];
};

const usePopups = (): UsePopupsResult => {
	const rawPopups = useGetParams(GET_PARAMS.popups);
	const [mountedPopups, setMountedPopups] = useState(() =>
		parsePopups(rawPopups)
	);
	const timeoutIdRef = useRef<number>(0);

	useEffect(() => {
		timeoutIdRef.current = window.setTimeout(() => {
			setMountedPopups(parsePopups(rawPopups));
		}, 300);

		return () => {
			const id = timeoutIdRef.current;
			clearTimeout(id);
		};
	}, [rawPopups]);

	const popups = useMemo(() => parsePopups(rawPopups), [rawPopups]);

	return {
		mountedPopups,
		popups,
	};
};

export default usePopups;
