import {Card, CardHeader, CardBody, CardFooter, Divider,  Image} from "@nextui-org/react"

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
        <Divider orientation="vertical" className="h-full bg-white absolute top-20 left-9 w-1" />
        <div className="flex flex-col w-3/4">
          <p className="text-md text-white">UserName</p>
          <p className="text-small text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur neque nesciunt eos praesentium sapiente quaerat, perferendis quisquam non voluptatem sit facilis est vitae in rerum! Vel impedit quos vitae! Quibusdam.</p>
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
    <CardFooter>
      <p>icons</p>
    </CardFooter>
    <Divider className="bg-white"/>
  </Card>
  </>
  )
}
