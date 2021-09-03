import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(
	await readFile(new URL('./../package.json', import.meta.url))
);

export default ({ clear = true }) => {
	unhandled();
	welcome({
		title: `gitignore`,
		tagLine: `by Amir.H Ebrahimi`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
