import { Status } from './types';

const ERROR_MSG = 'Something went wrong. Please try again later.';
const LOADING_MSG = 'Loading...';

export const NEWS_STATUS_MSG_MAP: Record<Status, string> = {
    [Status.Loading]: LOADING_MSG,
    [Status.Error]: ERROR_MSG,
    [Status.Empty]: 'Select a source above to load news',
};

export const SOURCES_STATUS_MSG_MAP: Record<Status, string> = {
    [Status.Loading]: LOADING_MSG,
    [Status.Error]: ERROR_MSG,
    [Status.Empty]: 'No available sources',
};
