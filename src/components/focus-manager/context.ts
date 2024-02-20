/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 feedzai.com, Rights Reserved.
 */
import { createContext } from "react";
import { IFocusManager } from "./index";

export const FocusContext = createContext<IFocusManager | null>(null);
