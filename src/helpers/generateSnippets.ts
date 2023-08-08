import { writeFile } from "fs";

import coreSnippets, { CoreSnippets } from "../sourceSnippets/core";
import extensionConfig from "./extensionConfig";
import parseSnippetToBody from "./parseSnippetToBody";
import { replaceSnippetPlaceholders } from "./snippetPlaceholders";
export type SnippetKeys = CoreSnippets["key"];

export type Snippet = CoreSnippets;

export type Snippets = {
	[key in SnippetKeys]: Snippet;
};

const getSnippets = () => {
	const { languageScopes } = extensionConfig();

	const snippets = [...coreSnippets].reduce((acc, snippet) => {
		acc[snippet.key] = Object.assign(snippet, {
			body: parseSnippetToBody(snippet),
			scope: languageScopes,
		});
		return acc;
	}, {} as Snippets);

	return replaceSnippetPlaceholders(JSON.stringify(snippets, null, 2));
};

const generateSnippets = () =>
	new Promise((resolve) => {
		const jsonSnippets = getSnippets();
		console.log("jsonSnippets: ", jsonSnippets);
		writeFile(
			__dirname + "/../snippets/generated.json",
			jsonSnippets,
			(error) => {
				if (error) {
					console.error(error);
				}
				return resolve(true);
			},
		);
	});

export default generateSnippets;
