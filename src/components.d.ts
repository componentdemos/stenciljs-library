/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyDropdown {
        "title": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-dropdown": HTMLMyDropdownElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyDropdown {
        "onOnToggle"?: (event: CustomEvent<any>) => void;
        "title"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-dropdown": MyDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
        }
    }
}
