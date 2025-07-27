import Mercury from '@postlight/mercury-parser';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    const result = await Mercury.parse(url);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to parse the URL', details: error.toString() });
  }
}

