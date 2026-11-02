export type ResponseStatus = 'ok' | 'error';
export type SourcesStatus = Exclude<Status, Status.Initial>;

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
    Initial,
    Loading,
    Error,
    Empty,
}
