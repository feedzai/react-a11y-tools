import { useState } from "react";
import type { Props } from "react-docgen-typescript";
import { useSafeLayoutEffect } from "../../../../src";

type DocgenInfo = {
	props?: Props;
	description?: string;
};

export const useDynamicImport = (name: string): DocgenInfo => {
	const [info, setInfo] = useState<DocgenInfo>({});

	useSafeLayoutEffect(() => {
		let resolved = false;

		try {
			import(`../../../.docusaurus/globalData.json`)
				.then((importedInfo) => {
					if (!resolved) {
						resolved = true;
						const data: any[] =
							importedInfo.default["docusaurus-plugin-react-docgen-typescript"].default;
						const info = data
							.filter((item) => item.displayName === name)
							.map((item) => {
								return {
									props: item.props,
									description: item.description,
								};
							});

						setInfo(info[0]);
					}
				})
				.catch(() => console.error(`Not found DocgenInfo for ${name}.`));
		} catch (e) {
			console.error(e);
		}

		return () => {
			resolved = true;
		};
	}, [name]);

	return info;
};
