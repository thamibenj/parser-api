import Mercury from '@postlight/parser';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: true, message: 'URL is required' });
  }

  try {
    const result = await Mercury.parse(url, {
      contentType: 'html',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
      failed: true,
    });
  }
}




