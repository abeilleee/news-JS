import { Article } from './article.interface';
import { ResponseStatus } from './types';

export interface ArticleResponse {
    status: ResponseStatus;
    totalResults: number;
    articles: Article[];
}
