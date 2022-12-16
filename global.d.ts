declare module '*.scss' {
	const exports: { [exportName: string]: string };
	export = exports;
}

declare module '*.svg' {
	const value: any;
	export default value;
}

declare module '*.jpg' {
	const value: any;
	export default value;
}
