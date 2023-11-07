import { useQuery } from "@tanstack/react-query";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import ErrorPage from "../../componemts/ErrorPage";
import Skeleton from "react-loading-skeleton";
import CommentCard from "./CommentCard";
import PropTypes from 'prop-types';

const Comment = ({id}) => {
       const axiosNormal=useAxiosNormal()
       const getComment=async()=>{
            const res=await axiosNormal.get(`/comment?oldId=${id}`)
               return res
       }

       const{data,isLoading ,isError}=useQuery({
         queryKey:['comment',id],
          queryFn: getComment
       })
         if(isError){
            return <ErrorPage></ErrorPage>
        }
        if(isLoading){
            return <Skeleton count={10} />
      }
         
    return (
        <div>
            <div className="">
                 {
                    data?.data?.map(item=><CommentCard key={item._id} item={item}></CommentCard>)
                 }
            </div>
        </div>
    );
};

Comment.propTypes={
      id:PropTypes.string
}
export default Comment;