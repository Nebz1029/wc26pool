const https = require("https");

exports.handler = async (event) => {
  const endpoint = (event.queryStringParameters || {}).endpoint || "fixtures";
  const key = process.env.API_FOOTBALL_KEY || "";

  const paths = {
    fixtures:   "/v3/fixtures?league=1&season=2026",
    standings:  "/v3/standings?league=1&season=2026",
    topscorers: "/v3/players/topscorers?league=1&season=2026",
  };

  const apiPath = paths[endpoint] || paths.fixtures;

  const body = await new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "v3.football.api-sports.io",
        path: apiPath,
        method: "GET",
        headers: { "x-apisports-key": key },
      },
      (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(d));
      }
    );
    req.on("error", reject);
    req.end();
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body,
  };
};
