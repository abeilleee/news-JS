import { Article } from './article.interface';

export interface ArticleResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
