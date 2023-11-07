import PropTypes from 'prop-types';

const CommentCard = ({item}) => {
    const {comment,
    logUserPhoto,logUser}=item ||{}
    console.log(item)
    return (
        <div className="border border-t-0 p-2 mb-5 ">
             <div className="flex gap-2" >
                <div>
                <img className="w-12 h-12 rounded-full" src={logUserPhoto} alt="" />
                </div>
                <div>
                    <h1>{logUser}</h1>
                    <p>Comment: {comment}</p>
                </div>
             </div>
        </div>
    );
};
CommentCard.propTypes={
    item:PropTypes.string
}
export default CommentCard;