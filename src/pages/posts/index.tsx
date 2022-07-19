import { IPost } from 'hooks/api/interface'
import API_URL from 'hooks/api/urls'
import usePost from 'hooks/usePost'
import { usePrefetchQuery } from 'hooks/useReactQuery'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Board from 'components/templates/board/Board'
import { IListItemProps } from 'components/molecules/listItem/ListItem'
import PostsMain from './index.styles'

const posts: NextPage = () => {
  const { getPosts } = usePost()
  const { data: postsData, isLoading } = getPosts()

  const contents: IListItemProps[] | undefined = postsData?.map(
    (content, index) => ({
      type: 'NumberListItem',
      content: <Link href={`/posts/${content.id}`}>{content.title}</Link>,
      paddingY: 'md',
      itemNumber: index + 1,
    }),
  )

  return (
    <PostsMain>
      <Board
        type='BasicBoard'
        headerText='Posts'
        contents={contents}
        height={500}
        isLoading={isLoading}
      />
    </PostsMain>
  )
}

export default posts

export const getStaticProps: GetStaticProps = async () => {
  const props = await usePrefetchQuery<IPost[]>(API_URL.POSTS)
  return props
}
