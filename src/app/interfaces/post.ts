export interface Post {
    title: string;
    subreddit_name_prefixed: string;
    thumbnail: string;
}

export interface Posts{
    children: Post[];

}