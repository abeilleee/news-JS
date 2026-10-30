import { getElement } from '@/helpers/getElement';
import { Source } from '@/types';
import './sources.css';

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getElement<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            if (sourceClone instanceof DocumentFragment) {
                const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
                const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item');

                if (sourceName) sourceName.textContent = item.name;
                if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        const sources = getElement<HTMLElement>('.sources');
        sources.append(fragment);
    }
}

export default Sources;
