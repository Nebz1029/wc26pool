const https = require("https");

exports.handler = async (event) => {
  const endpoint = (event.queryStringParameters || {}).endpoint || "fixtures";
  const key = process.env.FOOTBALL_DATA_KEY || "";

  // football-data.org endpoints for World Cup 2026
  // Competition code WC, season 2026
  const paths = {
    fixtures:   "/v4/competitions/WC/matches?season=2026",
    standings:  "/v4/competitions/WC/standings?season=2026",
    topscorers: "/v4/competitions/WC/scorers?season=2026",
  };

  const apiPath = paths[endpoint] || paths.fixtures;

  const body = await new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.football-data.org",
        path: apiPath,
        method: "GET",
        headers: { "X-Auth-Token": key },
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
