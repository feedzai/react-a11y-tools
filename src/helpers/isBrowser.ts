/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * Checkes wether the user is running the app on a browser or under another type of environment.
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
export const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
