/* eslint-disable @typescript-eslint/no-empty-interface */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * modules.d.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
declare module "*.css";
declare module "*.module.scss";

declare interface Navigator extends NavigatorUA {}
declare interface WorkerNavigator extends NavigatorUA {}

// https://wicg.github.io/ua-client-hints/#navigatorua
declare interface NavigatorUA {
	readonly userAgentData?: NavigatorUAData;
}

// https://wicg.github.io/ua-client-hints/#dictdef-navigatoruabrandversion
interface NavigatorUABrandVersion {
	readonly brand: string;
	readonly version: string;
}

// https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues
interface UADataValues {
	readonly brands?: NavigatorUABrandVersion[];
	readonly mobile?: boolean;
	readonly platform?: string;
	readonly architecture?: string;
	readonly bitness?: string;
	readonly model?: string;
	readonly platformVersion?: string;
	/** @deprecated in favour of fullVersionList */
	readonly uaFullVersion?: string;
	readonly fullVersionList?: NavigatorUABrandVersion[];
	readonly wow64?: boolean;
}

// https://wicg.github.io/ua-client-hints/#dictdef-ualowentropyjson
interface UALowEntropyJSON {
	readonly brands: NavigatorUABrandVersion[];
	readonly mobile: boolean;
	readonly platform: string;
}

// https://wicg.github.io/ua-client-hints/#navigatoruadata
interface NavigatorUAData extends UALowEntropyJSON {
	getHighEntropyValues(hints: string[]): Promise<UADataValues>;
	toJSON(): UALowEntropyJSON;
}

interface Window {
	__react_a11y_tools_activeScope__: RefObject<HTMLElement[]> | null;
	__react_a11y_tools_scopes__: Set<RefObject<HTMLElement[]>>;
}
