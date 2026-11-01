const ERROR_MSG = 'Something went wrong. Please try again later.';
const LOADING_MSG = 'Loading...';

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum HttpMethod {
    Get = 'GET',
    Put = 'PUT',
    Post = 'POST',
    Delete = 'DELETE',
}

export enum Status {
    Loading,
    Error,
    Empty,
}

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
