export interface ActualData {
    key?: number | string;
    id: number;
    title: string;
    userId: number;
}

export interface Rendering {
    data?: Array<ActualData>
    title?: string;
}

export const globalState: Rendering = {
    data: [],
    title: ''
}