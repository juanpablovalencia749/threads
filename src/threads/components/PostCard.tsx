import {Card, CardHeader, CardBody, CardFooter, Divider,  Image} from "@nextui-org/react"
import {  ReactPost } from ".."

export const PostCard = () => {
  return (
  <>
    <Card fullWidth={true} shadow='none' className="flex flex-col relative bg-primary">
          <CardHeader className="flex items-start gap-6">
          <Image
            height={50}
            width={50}
            alt="nextui logo"
            radius="full"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          />
        <Divider orientation="vertical" className="h-[80%] bg-[#333638] absolute top-[70px] left-9 w-[2px]" />
        <div className="flex flex-col w-3/4">
          <p className="text-md text-white">UserName</p>
          <p className="text-small text-white">Lorem ipsam.</p>
        </div>
      </CardHeader>


    <CardBody className="flex items-start ml-20">
      <Image 
        src="https://cdn.pixabay.com/photo/2023/12/20/07/53/pattern-8459167_960_720.jpg" 
        alt="userPost"
        radius="md"
        width={300}
        height={400} 
      />
    </CardBody>
    <CardFooter >
      <ReactPost/>
    </CardFooter>
    <Divider className="bg-white my-4"/>
  </Card>
    {/* <Comment/> */}
  </>
  )
}
