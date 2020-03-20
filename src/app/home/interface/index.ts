export interface blog {
    id: number,
    author: string,
    title: string,
    content: string,
    img?: string,
    createtime: number
}
export interface response {
    data: blog[],
    errno: number
}