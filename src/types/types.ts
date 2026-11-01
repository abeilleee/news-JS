export type ResponseStatus = 'ok' | 'error';

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
