import { SourceResponse, ArticleResponse } from '@/types';
import { Endpoint } from '@/constants';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: (data: SourceResponse) => void): void {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: ArticleResponse) => void): void {
        const container = e.currentTarget;

        if (!(e.target instanceof Element) || !(container instanceof Element)) {
            return;
        }

        const sourceItem = e.target.closest('.source__item');

        if (!sourceItem || !container.contains(sourceItem)) {
            return;
        }

        const sourceId = sourceItem.getAttribute('data-source-id');

        if (!sourceId || container.getAttribute('data-source') === sourceId) {
            return;
        }

        container.setAttribute('data-source', sourceId);

        super.getResp(
            {
                endpoint: Endpoint.Everything,
                options: {
                    sources: sourceId,
                },
            },
            callback
        );
    }
}

export default AppController;
