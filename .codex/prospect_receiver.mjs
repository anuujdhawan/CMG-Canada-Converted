import http from 'node:http';
import fs from 'node:fs/promises';

const outputPath = '/private/tmp/cmg_prospects.tsv';
const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url?.startsWith('/receive?data=')) {
    const data = decodeURIComponent(req.url.slice('/receive?data='.length));
    await fs.writeFile(outputPath, data, 'utf8');
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('received');
    return;
  }
  res.writeHead(404);
  res.end('not found');
});
server.listen(8765, '127.0.0.1');
