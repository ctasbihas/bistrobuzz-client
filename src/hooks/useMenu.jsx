import { useQuery } from "@tanstack/react-query";

export const useMenu = () => {
	const {
		data: menu = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["menu"],
		queryFn: async () => {
			const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/menu`);
			return res.json();
		},
	});

	return [menu, loading, refetch];
};
