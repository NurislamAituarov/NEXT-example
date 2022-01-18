export default function echo(rec, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      message: rec.query.message ?? 'Base message',
    }),
  );
}
