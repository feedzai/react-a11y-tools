import "@cypress/code-coverage/support";
import "./commands";
import "./hacks";
import "../../src/components/skip-links/styles.css";
import { mount, unmount, mountHook } from "cypress/react";

// Cypress component testing methods
Cypress.Commands.add("mount", mount);
Cypress.Commands.add("unmount", unmount);
Cypress.Commands.add("mountHook", mountHook);
