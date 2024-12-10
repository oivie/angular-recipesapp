const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const response = await fetch(
    `https://api.edamam.com/api/nutrition-details?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const data = await response.json();
  res.status(200).json(data);
};
