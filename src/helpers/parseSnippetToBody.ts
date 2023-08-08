import extensionConfig from "./extensionConfig";
import { formatSnippet } from "./formatters";
import { Snippet } from "./generateSnippets";

const parseSnippetToBody = async (snippet: Snippet) => {
	const body =
		typeof snippet.body === "string"
			? snippet.body
			: snippet.body.join("\n");
	const snip = await formatSnippet(body);
	const formattedSnippet = snip.split("\n");
	return formattedSnippet;
};

export default parseSnippetToBody;
