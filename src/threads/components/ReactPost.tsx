import { Avatar } from "@nextui-org/react"
// import { increment } from "../../store/auth/authSlice"
// import { useAppDispatch, useAppSelector } from "../../store/hook"

export const ReactPost = () => {
  
  // const count = useAppSelector((state) => state.counter.value)
  // const dispatch = useAppDispatch()

  // const handleClick = ():void => {
  //   dispatch(increment())
  // }

  return (
  <>
    <div className="relative top-4 ">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-5 h-5 text-tiny absolute bottom-1"  />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="w-5 h-5 text-tiny absolute bottom-1 left-6"  />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-5 h-5 text-tiny absolute left-3" />
    </div>
		
		
			
    <div className="ml-20 flex flex-col gap-2">
		<div className="flex gap-2">
			<svg
						aria-label='Like'
						// color={liked ? "rgb(237, 73, 86)" : ""}
						color={"rgb(237, 73, 86)"}
						fill={"rgb(237, 73, 86)"}
						// fill={liked ? "rgb(237, 73, 86)" }
						height='19'
						role='img'
						viewBox='0 0 24 22'
						width='20'
						// onClick={handleLikeAndUnlike}
					>
						<path
							d='M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z'
							stroke='currentColor'
							strokeWidth='2'
						></path>
			</svg>
			<svg
				aria-label='Comment'
				color='#ffff'
				fill=''
				height='20'
				role='img'
				viewBox='0 0 24 24'
				width='20'
				// onClick={onOpen}
			>
				<title className="text-white">Comment</title>
				<path
					d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
					fill='none'
					stroke='currentColor'
					strokeLinejoin='round'
					strokeWidth='2'
				></path>
			</svg>
			<svg
				aria-label='Repost'
				color='#ffff'
				fill='currentColor'
				height='20'
				role='img'
				viewBox='0 0 24 24'
				width='20'
			>
				<title>Repost</title>
				<path
					fill=''
					d='M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z'
				></path>
			</svg>
			<svg
				aria-label='Share'
				color='#ffff'
				fill='rgb(243, 245, 247)'
				height='20'
				role='img'
				viewBox='0 0 24 24'
				width='20'
			>
				<title>Share</title>
				<line
					fill='none'
					stroke='currentColor'
					strokeLinejoin='round'
					strokeWidth='2'
					x1='22'
					x2='9.218'
					y1='3'
					y2='10.083'
				></line>
				<polygon
					fill='none'
					points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
					stroke='currentColor'
					strokeLinejoin='round'
					strokeWidth='2'
				></polygon>
			</svg>
		</div>
			<ul className="flex gap-1">
				<li className="text-[#4f4f4f]">123 replies</li>
				<li className="text-[#4f4f4f]">453 likes</li>
			</ul>
    </div>
		

  </>
  
  )}
