#!/usr/bin/env node

/**
 * status-check
 * check automatically what i should check manually
 *
 * @author Amir.H Ebrahimi <https://github.com/amirHossein-Ebrahimi>
 */

import init from './utils/init.js';
import cli from './utils/cli.js';
import log from './utils/log.js';

import toptal from './utils/toptal.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	await toptal(cli.input);

	debug && log(flags);
})();
