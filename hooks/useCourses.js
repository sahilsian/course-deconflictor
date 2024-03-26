import endpoints from "../constants/endpoints";
import { useQuery } from "@tanstack/react-query";

export default function useCourses() {
    const query = useQuery({
        queryKey: ['courses'],
        queryFn: () => getRESTCourses(),
        retry: false,
        refetchOnWindowFocus: 'always'
    })

    return query;
}

async function getRESTCourses() {
    const response = await fetch(endpoints.BASE_URL + endpoints.GET_COURSES(), {
        method: 'get'
    }).then((res) => res.json())

    return response;
}