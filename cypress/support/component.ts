import "@cypress/code-coverage/support";
import "./commands";
import "./hacks";
import "../../src/components/skip-links/index.module.scss";
import { mount, unmount } from "cypress/react";

// Cypress component testing methods
Cypress.Commands.add("mount", mount);
Cypress.Commands.add("unmount", unmount);
