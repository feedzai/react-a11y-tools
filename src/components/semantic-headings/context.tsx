/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { createContext } from "react";
import { FIRST_HEADING_LEVEL } from "./constants";

/**
 * Headings Context, with the initial value of 1.
 */
export const HeadingsContext = createContext(FIRST_HEADING_LEVEL);
