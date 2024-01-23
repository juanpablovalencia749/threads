import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { useState } from "react";
import threadApi from "../../api/threadsApi";

interface Props {
  _id:string
  name:string
  username:string
  bio:string
  followers:string[]
}

export const ProfileCard:React.FC<Props> = ({_id, name, username,  bio, followers, }) => {

    const [isFollowed, setIsFollowed] = useState(false);
    // const [following, setFollowing] = useState() 
    
    
    const toggleFollowStatus = async () => {      
      const {data} = await threadApi.post(`/users/follow/${_id}`)
      console.log(data); 
    }

    return (
      <>
          <Card  shadow='none' className="bg-primary">
        <CardHeader className="justify-between ">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-2xl font-semibold leading-none text-white">{name}</h4>
              <h5 className="text-small tracking-tight text-white">@{username}</h5>
            </div>
          </div>
          <Avatar className="w-20 h-20"  radius="full" size="lg" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" />
        </CardHeader>
        <CardBody className="px-3 py-2 text-small  text-white">
          <p>
            {bio}
          </p>
          <span className="pt-2">
            #FrontendWithZoey 
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className=" justify-between gap-3">        
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">{followers.length}</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
          <Button
            onClick={toggleFollowStatus}
            className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>   
        </CardFooter>
        <Button
            className="text-white my-6 border"
            color="primary"
            radius="full"
            size="sm"
          >
            Edit
          </Button>
            <div className="grid grid-cols-2 mb-11">
            <button className="flex items-center justify-center border-white border-b-4 w-full text-white">Threads</button>
            <button className="flex items-center justify-center border-white border-b-2 w-full text-white">Replies</button>
            </div>        
      </Card>
      </>
  )
}
