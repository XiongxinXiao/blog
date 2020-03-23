export interface blog {
    id: number,
    author: string,
    title: string,
    content: string,
    img?: string,
    createtime: number
}
export interface resList {
    data?: blog[],
    message?: string,
    errno: number
}

export interface resLogin {
    data?: realname,
    message?: string,
    errno: number
}

export interface resEdit {
    data?: object,
    message?: string,
    errno: number
}

export interface realname {
    realname: string
}