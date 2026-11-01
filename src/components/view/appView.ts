import { ArticleResponse, SourceResponse } from '@/types';
import { NEWS_STATUS_MSG_MAP, SOURCES_STATUS_MSG_MAP, Status } from '@/constants';
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
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourceResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public showNewsMessage(status: Status): void {
        StatusView.showStatusMessage({ status, selector: '.news', msgMap: NEWS_STATUS_MSG_MAP });
    }

    public showSourcesMessage(status: Status): void {
        StatusView.showStatusMessage({ status, selector: '.sources', msgMap: SOURCES_STATUS_MSG_MAP });
    }
}

export default AppView;
