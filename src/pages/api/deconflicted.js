
import endpoints from "../../../constants/endpoints";

export default async function handler(req, res) {
    try {
        const { search } = req.query; 

        const url = new URL(`${endpoints.BASE_URL}/api/course/deconflicted`);
        url.searchParams.append('search', search);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
