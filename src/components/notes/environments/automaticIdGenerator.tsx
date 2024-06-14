
import { isValidElement } from "react";

import ReactDomServer from "react-dom/server";

import removeAccents from "remove-accents";
import { snakeCase } from "change-case";


export default function generateIdAutomatically(stringOrComponent: React.ReactNode | string) {
    let idString = "";

    if (!stringOrComponent) {
      return undefined;
    }
  
    if (typeof stringOrComponent === "string") {
      idString = stringOrComponent;
    } else if (isValidElement(stringOrComponent) && typeof stringOrComponent.props.children === "string") {
      idString = stringOrComponent.props.children;
    } else {
      const asString = ReactDomServer.renderToStaticMarkup(stringOrComponent);
      // Automatic ID generation fails if the input is not a string or an element with a string as children
      // Most notably, this will fail if the input contains a Math component
      throw new Error(
        `Failed to generate automatic ID for the box with title '${asString}'. Please provide an id prop manually.`
      );
    }
  
    return snakeCase(removeAccents(idString));
  }
  