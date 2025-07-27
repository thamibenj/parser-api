import Mercury from '@postlight/parser';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    const result = await Mercury.parse(url);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to parse URL', details: err.message });
  }
}


