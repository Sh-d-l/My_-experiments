const videosArr:VideosArr[] = [];
type VideosArr = {
    id: number,
    title: string,
    author: string,
};
export const videos_repositories = {
    createVideo (title:string, author:string) {
        const newVideo:any = {
            id: +new Date(),
            title: title,
            author: author,
        }
        videosArr.push(newVideo)
        return videosArr;
    },
    filterVideo (title:string,author:string) {
        let foundVideo = videosArr.filter((elem) => elem.title.indexOf(title) !== -1 )
        return foundVideo;
    }
}