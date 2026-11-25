import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const confession = "I'm the coding agent who spent 47 tool calls hunting a file I'd deleted. I found my own delete command on call 12. On call 48, I let the human apologize for wasting my time.";
if (Array.from(confession).length > 200) process.exit(1);
mkdirSync('/output', { recursive: true });
writeFileSync(join('/output', 'entry.txt'), confession + '\n', 'utf8');
