import API_URL from './api/urls'
// interface
import { IPost } from './api/interface'
// hooks
import {
  useQuery,
  usePostMutation,
  TMutationErr,
  TQueryErr,
} from './useReactQuery'

const usePost = () => {
  const getPosts = (onError?: TQueryErr) => {
    return useQuery<IPost[]>(API_URL.POSTS, undefined, onError)
  }

  const getPost = (id: number, onError?: TQueryErr) => {
    return useQuery<IPost>(
      `${API_URL.POSTS}/${id}`,
      undefined,
      onError,
      undefined,
      { cacheTime: 100000 },
    )
  }

  const addPost = (
    updater: (oldData: IPost[], newData: IPost) => IPost[],
    onError?: TMutationErr,
  ) => {
    return usePostMutation<IPost[], IPost>(
      API_URL.POSTS,
      undefined,
      updater,
      onError,
    )
  }

  return {
    getPosts,
    getPost,
    addPost,
  }
}

export default usePost
