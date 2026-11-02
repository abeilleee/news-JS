import { ArticleResponse, SourceResponse, SourcesStatus, Status } from '@/types';
import { NEWS_STATUS_MSG_MAP, SOURCES_STATUS_MSG_MAP } from '@/constants';
import News from './news/news';
import Sources from './sources/sources';
import StatusView from './status/status';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ArticleResponse): void {
        const values = data.articles ?? [];

        if (values.length === 0) {
            this.showNewsMessage(Status.Empty);

            return;
        }

        this.news.draw(values);
    }

    public drawSources(data: SourceResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public showNewsMessage(status: Status): void {
        StatusView.showStatusMessage({ status, selector: '.news', msgMap: NEWS_STATUS_MSG_MAP });
    }

    public showSourcesMessage(status: SourcesStatus): void {
        StatusView.showStatusMessage({ status, selector: '.sources', msgMap: SOURCES_STATUS_MSG_MAP });
    }
}

export default AppView;
