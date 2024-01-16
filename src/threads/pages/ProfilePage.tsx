import { useEffect, useState } from "react"
import { PostCard, ProfileCard } from ".."
import threadApi from "../../api/threadsApi"
import { useParams } from "react-router-dom"
import { UsernameInfo } from "../../interface"

export const ProfilePage = () => {

  const [profileInfo, setProfileInfo] = useState<UsernameInfo>()
  const { username } = useParams();

  const getProfile = async () => {
    const { data } = await threadApi.get(`/users/profile/${username}`)
    setProfileInfo(data)
  }

 
  


  useEffect(() => {
    getProfile()
  }, [username])
  

  return (
    <>
      {profileInfo ?
    <>
      <ProfileCard _id= {profileInfo._id} name={profileInfo.name} username={profileInfo.username} bio={profileInfo.bio} followers={profileInfo.followers}/>
      <PostCard/>
    </>
    :
    <>
      <h1>Loading</h1>
    </>
    }
    </>
  )
}

