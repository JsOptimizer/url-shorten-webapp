import { ButtonStart } from "../components"

const GetStarted = () => {
  return (
    <div className="m-8 pb-12 ">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl">
          More than just shorter links
        </h1>
        <p className="">
          Build your brand recognition and get details insights on how your links are performing
        </p>
        <ButtonStart title={"Get Started"} />
      </div>
      <div className="mb-12"> </div>
    </div>
  )
}

export default GetStarted