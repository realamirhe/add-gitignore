import ora from 'ora';
import axios from 'axios';
import chalk from 'chalk';
import { to } from 'await-to-js';
import write from 'write';
import handleError from 'cli-handle-error';

const spinner = ora({ text: '' });
const apiURL = 'https://www.toptal.com/developers/gitignore/api';

export default async ignoredItems => {
	const gitignoreURL = `${apiURL}/${ignoredItems.join(',')}`;

	spinner.start(
		chalk`{dim Fetching corresponding gitignore} {yellow ${gitignoreURL}}`
	);
	const [err, res] = await to(axios.get(gitignoreURL));
	handleError(`API CALL FAILED`, err, true, true);

	const content = [
		'# Generated intelligently by https://github.com/amirHossein-Ebrahimi/add-gitignore',
		res.data.trim()
	].join('\n');

	await write('.gitignore', content, { newline: true });

	spinner.stop();
};
