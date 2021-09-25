/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * context.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { createContext } from "react";
import { INITIAL_LEVEL } from "./constants";

/**
 * Headings Context, with the initial value of 1.
 */
export const HeadingsContext = createContext(INITIAL_LEVEL);
