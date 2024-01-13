
export const Comment = () => {
  return (
    <>
          <div className="flex p-4">
        
        <img
        className="w-10 h-10 rounded-full object-cover"
        src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
        />


    <div className="w-full px-2 pb-4 border-b border-[rgba(49,49,50,1)]">
        {/* Thread header */}
        <div className="flex justify-between gap-2 ">
            <strong>pedro</strong>

            <div className="flex justify-between gap-2 justify items-center cursor-pointer">
                {/* <p className="text-[rgba(97,97,97,1)]">{<ReactTimeAgo date={new Date(comment.$createdAt).getTime()} locale="en-US"/>}</p> */}
                <p className="text-[rgba(97,97,97,1)]">2023-02-23</p>
                {/* <Trash2 onClick={handleDelete}size={14}/> */}
            </div>
        </div>

        {/* Thread Body */}
        
            <div className="py-4 text-white" style={{whiteSpace:"pre-wrap"}}>
                wake up to reality
                {/* {comment.image && (
                    <img className="object-cover border border-[rgba(49,49,50,1)] rounded-md" src={comment.image}/>
                )} */}
            </div>
    

        <div className="flex gap-4 py-4">
                {/* <Heart 
                onClick={toggleLike} 
                size={22} 
                className="cursor-pointer"
                color={commentInstance?.users_who_liked.includes(user.$id) ? '#ff0000' : '#fff' }
                /> */}
                
                {/* <MessageCircle size={22} color={"#fff"}/> */}
              
                {/* <Repeat size={22}/>
                <Send size={22}/> */}
        </div>

        <div className="flex gap-4">
            {/* <p className="text-[rgba(97,97,97,1)]">Replies 16</p>
            <p>·</p> */}
            <p className="text-[rgba(97,97,97,1)]">2023 Likes</p>
        </div>
        
    </div>
    </div>
    </>
  )
}
