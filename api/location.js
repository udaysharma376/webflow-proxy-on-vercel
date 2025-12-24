export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `https://api.webflow.com/v2/collections/69423901ea3cd5e0b9716cb8/items/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEBFLOW_TOKEN}`,
          "accept-version": "1.0.0"
        }
      }
    );

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data.fieldData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service data" });
  }
}
