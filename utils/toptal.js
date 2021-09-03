import ora from 'ora';
import axios from 'axios';
import chalk from 'chalk';
import { to } from 'await-to-js';
import write from 'write';
import handleError from 'cli-handle-error';

const spinner = ora({ text: '' });
const apiURL = 'https://www.toptal.com/developers/gitignore/api';

const MUST_ADD_LIST = ['webstorm'];

// interceptor for debug
// axios.interceptors.request.use(request => {
// 	console.log('Starting Request', JSON.stringify(request, null, 2));
// 	return request;
// });

// axios.interceptors.response.use(response => {
// 	console.log('Response:', JSON.stringify(response, null, 2));
// 	return response;
// });

export default async ignoredItems => {
	MUST_ADD_LIST.forEach(mustAddItem => {
		if (~ignoredItems.includes(mustAddItem)) ignoredItems.push(mustAddItem);
	});

	const gitignoreURL = `${apiURL}/${ignoredItems.join(',')}`;

	spinner.start(
		chalk`{dim Fetching corresponding gitignore} {yellow ${gitignoreURL}}`
	);
	const [err, res] = await to(axios.get(gitignoreURL));
	handleError(`API CALL FAILED`, err, true, true);

	await write('.gitignore', res.data.trim(), { newline: true });

	spinner.stop();
};
