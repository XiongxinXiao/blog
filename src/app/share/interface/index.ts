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
    message?: string,
    errno: number
}