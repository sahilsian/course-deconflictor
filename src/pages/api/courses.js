import endpoints from "../../../constants/endpoints";
export default async function handler(req, res) {
    try {
      const response = await fetch(endpoints.BASE_URL + endpoints.GET_COURSES());
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }