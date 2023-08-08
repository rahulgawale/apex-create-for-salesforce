import { Placeholders, SnippetMapping } from "../types";

type CoreMapping = {
	debug: "dbg";
};

export type CoreSnippets = SnippetMapping<CoreMapping>;

const debug: CoreSnippets = {
	key: "debug",
	prefix: "dbg",
	body: [
		`System.debug('${Placeholders.FirstTab}: ' + ${Placeholders.FirstTab})`,
	],
	description: "Debug variable",
};

export default [debug];
