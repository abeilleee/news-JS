import { Status } from '@/types';
import { getElement } from '@/helpers/getElement';
import './status.css';

class StatusView {
    static showStatusMessage<S extends Status>({
        status,
        selector,
        msgMap,
    }: {
        status: S;
        selector: string;
        msgMap: Record<S, string>;
    }): void {
        const element = getElement(selector);
        const msg = msgMap[status];
        const paragraph = document.createElement('p');
        paragraph.classList.add('message');

        element.replaceChildren(paragraph);
        paragraph.textContent = msg;
        paragraph.classList.toggle('error-message', status === Status.Error);
        paragraph.classList.toggle('loading-message', status === Status.Loading);
    }
}

export default StatusView;
