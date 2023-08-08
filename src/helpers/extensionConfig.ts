import { workspace } from "vscode";

export type ExtensionSettings = {
	prettierEnabled: boolean;
	languageScopes: string[];
	typescriptPropsStatePrefix: "type" | "interface";
};

const extensionConfig = () =>
	workspace.getConfiguration(
		"apexCreate.settings",
	) as unknown as ExtensionSettings;

export default extensionConfig;
