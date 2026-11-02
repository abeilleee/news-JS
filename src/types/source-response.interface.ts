import { Source } from './source.interface';
import { ResponseStatus } from './types';

export interface SourceResponse {
    status: ResponseStatus;
    sources: Source[];
}
