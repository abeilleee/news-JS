import { Source } from './source.interface';

export interface SourceResponse {
    status: string;
    sources: Source[];
}
