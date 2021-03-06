/// <reference types="node" />
import type { SFCWithInstall } from 'element-plus/es/utils';
declare const _Upload: SFCWithInstall<import("vue").DefineComponent<{
    action: {
        type: StringConstructor;
        required: true;
    };
    headers: {
        type: import("vue").PropType<Headers>;
        default: () => {};
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    beforeRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onChange: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<() => void>;
        default: () => void;
    };
    onSuccess: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onProgress: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onError: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    fileList: {
        type: import("vue").PropType<import("./src/upload.type").UploadFile[]>;
        default: () => import("./src/upload.type").UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: import("vue").PropType<import("./src/upload.type").ListType>;
        default: import("./src/upload.type").ListType;
    };
    httpRequest: {
        type: FunctionConstructor;
        default: typeof import("./src/ajax").default;
    };
    disabled: BooleanConstructor;
    limit: {
        type: import("vue").PropType<import("element-plus/es/utils").Nullable<number>>;
        default: null;
    };
    onExceed: {
        type: FunctionConstructor;
        default: () => () => void;
    };
}, {
    abort: (file: import("./src/upload.type").UploadFile) => void;
    dragOver: import("vue").Ref<boolean>;
    draging: import("vue").Ref<boolean>;
    handleError: (err: Error, rawFile: import("./src/upload.type").ElFile) => void;
    handleProgress: (ev: import("./src/upload.type").ElUploadProgressEvent, rawFile: import("./src/upload.type").ElFile) => void;
    handleRemove: (file: import("./src/upload.type").UploadFile, raw: import("./src/upload.type").ElFile) => void;
    handleStart: (rawFile: import("./src/upload.type").ElFile) => void;
    handleSuccess: (res: any, rawFile: import("./src/upload.type").ElFile) => void;
    uploadDisabled: import("vue").ComputedRef<boolean | undefined>;
    uploadFiles: import("vue").Ref<{
        name: string;
        percentage?: number | undefined;
        status: import("./src/upload.type").UploadStatus;
        size: number;
        response?: unknown;
        uid: number;
        url?: string | undefined;
        raw: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): NodeJS.ReadableStream;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
    }[]>;
    uploadRef: import("vue").Ref<{
        abort: (file: import("./src/upload.type").UploadFile) => void;
        upload: (file: import("./src/upload.type").ElFile) => void;
    }>;
    submit: () => void;
    clearFiles: (status?: import("./src/upload.type").UploadStatus[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    action: {
        type: StringConstructor;
        required: true;
    };
    headers: {
        type: import("vue").PropType<Headers>;
        default: () => {};
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    beforeRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onChange: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<() => void>;
        default: () => void;
    };
    onSuccess: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onProgress: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onError: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    fileList: {
        type: import("vue").PropType<import("./src/upload.type").UploadFile[]>;
        default: () => import("./src/upload.type").UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: import("vue").PropType<import("./src/upload.type").ListType>;
        default: import("./src/upload.type").ListType;
    };
    httpRequest: {
        type: FunctionConstructor;
        default: typeof import("./src/ajax").default;
    };
    disabled: BooleanConstructor;
    limit: {
        type: import("vue").PropType<import("element-plus/es/utils").Nullable<number>>;
        default: null;
    };
    onExceed: {
        type: FunctionConstructor;
        default: () => () => void;
    };
}>>, {
    type: string;
    disabled: boolean;
    name: string;
    data: Record<string, any>;
    onChange: import("./src/upload.type").FileHandler<void>;
    drag: boolean;
    multiple: boolean;
    onError: import("./src/upload.type").FileResultHandler<Error>;
    onProgress: import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
    headers: Headers;
    method: string;
    withCredentials: boolean;
    accept: string;
    onSuccess: import("./src/upload.type").FileResultHandler<any>;
    beforeUpload: import("./src/upload.type").FileHandler<void>;
    onPreview: () => void;
    onRemove: import("./src/upload.type").FileHandler<void>;
    fileList: import("./src/upload.type").UploadFile[];
    autoUpload: boolean;
    listType: import("./src/upload.type").ListType;
    httpRequest: Function;
    limit: import("element-plus/es/utils").Nullable<number>;
    onExceed: Function;
    showFileList: boolean;
    beforeRemove: import("./src/upload.type").FileHandler<boolean>;
}>>;
export default _Upload;
export declare const ElUpload: SFCWithInstall<import("vue").DefineComponent<{
    action: {
        type: StringConstructor;
        required: true;
    };
    headers: {
        type: import("vue").PropType<Headers>;
        default: () => {};
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    beforeRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onChange: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<() => void>;
        default: () => void;
    };
    onSuccess: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onProgress: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onError: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    fileList: {
        type: import("vue").PropType<import("./src/upload.type").UploadFile[]>;
        default: () => import("./src/upload.type").UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: import("vue").PropType<import("./src/upload.type").ListType>;
        default: import("./src/upload.type").ListType;
    };
    httpRequest: {
        type: FunctionConstructor;
        default: typeof import("./src/ajax").default;
    };
    disabled: BooleanConstructor;
    limit: {
        type: import("vue").PropType<import("element-plus/es/utils").Nullable<number>>;
        default: null;
    };
    onExceed: {
        type: FunctionConstructor;
        default: () => () => void;
    };
}, {
    abort: (file: import("./src/upload.type").UploadFile) => void;
    dragOver: import("vue").Ref<boolean>;
    draging: import("vue").Ref<boolean>;
    handleError: (err: Error, rawFile: import("./src/upload.type").ElFile) => void;
    handleProgress: (ev: import("./src/upload.type").ElUploadProgressEvent, rawFile: import("./src/upload.type").ElFile) => void;
    handleRemove: (file: import("./src/upload.type").UploadFile, raw: import("./src/upload.type").ElFile) => void;
    handleStart: (rawFile: import("./src/upload.type").ElFile) => void;
    handleSuccess: (res: any, rawFile: import("./src/upload.type").ElFile) => void;
    uploadDisabled: import("vue").ComputedRef<boolean | undefined>;
    uploadFiles: import("vue").Ref<{
        name: string;
        percentage?: number | undefined;
        status: import("./src/upload.type").UploadStatus;
        size: number;
        response?: unknown;
        uid: number;
        url?: string | undefined;
        raw: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): NodeJS.ReadableStream;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
    }[]>;
    uploadRef: import("vue").Ref<{
        abort: (file: import("./src/upload.type").UploadFile) => void;
        upload: (file: import("./src/upload.type").ElFile) => void;
    }>;
    submit: () => void;
    clearFiles: (status?: import("./src/upload.type").UploadStatus[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    action: {
        type: StringConstructor;
        required: true;
    };
    headers: {
        type: import("vue").PropType<Headers>;
        default: () => {};
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    beforeRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<boolean>) | (() => import("./src/upload.type").FileHandler<boolean>) | {
            (): import("./src/upload.type").FileHandler<boolean>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onRemove: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onChange: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileHandler<void>) | (() => import("./src/upload.type").FileHandler<void>) | {
            (): import("./src/upload.type").FileHandler<void>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<() => void>;
        default: () => void;
    };
    onSuccess: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<any>) | (() => import("./src/upload.type").FileResultHandler<any>) | {
            (): import("./src/upload.type").FileResultHandler<any>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onProgress: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | (() => import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>) | {
            (): import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    onError: {
        type: ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        }) | ((new (...args: any[]) => import("./src/upload.type").FileResultHandler<Error>) | (() => import("./src/upload.type").FileResultHandler<Error>) | {
            (): import("./src/upload.type").FileResultHandler<Error>;
            new (): any;
            readonly prototype: any;
        })[];
        default: () => void;
    };
    fileList: {
        type: import("vue").PropType<import("./src/upload.type").UploadFile[]>;
        default: () => import("./src/upload.type").UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: import("vue").PropType<import("./src/upload.type").ListType>;
        default: import("./src/upload.type").ListType;
    };
    httpRequest: {
        type: FunctionConstructor;
        default: typeof import("./src/ajax").default;
    };
    disabled: BooleanConstructor;
    limit: {
        type: import("vue").PropType<import("element-plus/es/utils").Nullable<number>>;
        default: null;
    };
    onExceed: {
        type: FunctionConstructor;
        default: () => () => void;
    };
}>>, {
    type: string;
    disabled: boolean;
    name: string;
    data: Record<string, any>;
    onChange: import("./src/upload.type").FileHandler<void>;
    drag: boolean;
    multiple: boolean;
    onError: import("./src/upload.type").FileResultHandler<Error>;
    onProgress: import("./src/upload.type").FileResultHandler<ProgressEvent<EventTarget>>;
    headers: Headers;
    method: string;
    withCredentials: boolean;
    accept: string;
    onSuccess: import("./src/upload.type").FileResultHandler<any>;
    beforeUpload: import("./src/upload.type").FileHandler<void>;
    onPreview: () => void;
    onRemove: import("./src/upload.type").FileHandler<void>;
    fileList: import("./src/upload.type").UploadFile[];
    autoUpload: boolean;
    listType: import("./src/upload.type").ListType;
    httpRequest: Function;
    limit: import("element-plus/es/utils").Nullable<number>;
    onExceed: Function;
    showFileList: boolean;
    beforeRemove: import("./src/upload.type").FileHandler<boolean>;
}>>;
