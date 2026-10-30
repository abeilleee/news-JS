export const getElement = <T extends HTMLElement>(selector: string, root: ParentNode = document): T => {
    const element = root.querySelector<T>(selector);

    if (!element) {
        throw new TypeError(`Element not found for selector: "${selector}"`);
    }

    return element;
};
