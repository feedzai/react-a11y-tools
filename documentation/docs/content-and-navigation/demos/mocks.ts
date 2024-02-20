/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 feedzai.com, Rights Reserved.
 */
import { ISkipLink } from "../../../../src/components/skip-links/link";

/**
 * @type {ILinkOption[]} options
 */
const single: ISkipLink[] = [
  {
    target: "#content",
    text: "Skip to main content",
  },
];

const multiple = [
  {
    target: "#content",
    text: "Skip to main content",
    as: "button",
  },
  {
    target: "#navigation-menu",
    text: "Go to navigation menu",
    as: "button",
  },
];

export const options = {
  single,
  multiple,
};
