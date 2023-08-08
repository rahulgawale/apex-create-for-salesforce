import prettier from "prettier";

import extensionConfig from "./extensionConfig";
import getPrettierConfig from "./getPrettierConfig";
import {
	replaceSnippetPlaceholders,
	revertSnippetPlaceholders,
} from "./snippetPlaceholders";

export const formatSnippet = async (snippetString: string) => {
	return extensionConfig().prettierEnabled
		? await prettier.format(snippetString, getPrettierConfig())
		: snippetString;
};

export const parseSnippet = async (body: string | string[]) => {
	const snippetBody = typeof body === "string" ? body : body.join("\n");

	return replaceSnippetPlaceholders(
		await formatSnippet(revertSnippetPlaceholders(snippetBody))
	);
};
