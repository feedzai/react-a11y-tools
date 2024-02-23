/* istanbul ignore file */
/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * classNames.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
interface ClassDictionary {
	[id: string]: any;
}
type ClassArray = Array<ClassValue>;

function toVal<T>(mix: T | any) {
	let k;
	let y;
	let str = "";

	if (typeof mix === "string" || typeof mix === "number") {
		str += mix;
	} else if (typeof mix === "object") {
		if (Array.isArray(mix)) {
			for (k = 0; k < mix.length; k++) {
				if (mix[k]) {
					if ((y = toVal(mix[k]))) {
						str && (str += " ");
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += " ");
					str += k;
				}
			}
		}
	}

	return str;
}

/**
 * A tiny (228B) utility for constructing className strings conditionally.
 *
 * Also serves as a faster & smaller drop-in replacement for the classnames module.
 *
 * @example
 *
 * // Strings (variadic)
 * classNames('foo', true && 'bar', 'baz');
 * //=> 'foo bar baz'
 *
 * // Objects
 * classNames({ foo:true, bar:false, baz:isTrue() });
 * //=> 'foo baz'
 *
 * // Objects (variadic)
 * classNames({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
 * //=> 'foo --foobar'
 *
 * // Arrays
 * classNames(['foo', 0, false, 'bar']);
 * //=> 'foo bar'
 *
 * // Arrays (variadic)
 * classNames(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
 * //=> 'foo bar baz hello there'
 *
 * // Kitchen sink (with nesting)
 * classNames('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
 * //=> 'foo bar hello world cya'
 *
 * @returns {string}
 */
function classNames(...classes: ClassValue[]): string {
	let i = 0;
	let tmp: any;
	let x;
	let str = "";

	while (i < classes.length) {
		// eslint-disable-next-line prefer-rest-params
		if ((tmp = classes[i++])) {
			if ((x = toVal(tmp))) {
				str && (str += " ");
				str += x;
			}
		}
	}
	return str;
}

export default classNames;
