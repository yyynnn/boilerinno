import axios from 'axios'
import { useQuery } from 'react-query'

const getPostById = async (postId: string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return data
}

export const useFeaturePost = (postId: string) => {
    return useQuery(['post', postId], () => getPostById(postId))
}
