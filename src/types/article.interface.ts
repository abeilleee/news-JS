import { Source } from './source.interface';

export interface Article {
    source: Pick<Source, 'id' | 'name'>;
    publishedAt: string;
    title: string;
    url: string;
    author?: string;
    content?: string;
    description?: string;
    urlToImage?: string;
}
