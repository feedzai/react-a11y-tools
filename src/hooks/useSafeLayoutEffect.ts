/* eslint-disable @typescript-eslint/no-empty-function */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useSafeLayoutEffect.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "../helpers/isBrowser";

/**
 * `useLayoutEffect` that does not show warning when server-side rendering.
 *
 * See {@link https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a|Alex Reardon's article} for more info.
 */
export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
