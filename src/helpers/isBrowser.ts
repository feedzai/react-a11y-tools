/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * isBrowser.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
export const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
