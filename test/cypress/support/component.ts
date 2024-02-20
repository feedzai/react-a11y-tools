import "@cypress/code-coverage/support";
import "./commands";
import "./hacks";
import "../../../src/components/skip-links/styles.css";
import { mount, unmount } from "cypress/react18";

// Cypress component testing methods
Cypress.Commands.add("mount", mount);
Cypress.Commands.add("unmount", unmount);
