import { ButtonStart } from "../components"
import working from '../assets/images/illustration-working.svg'

const GetStarted = () => {
  return (
    <div className="my-8 pb-16 ">
      {/*Mobile side start*/}
      <div className="block lg:hidden text-center space-y-4">
        <h1 className="font-bold text-4xl">
          More than just shorter links
        </h1>
        <p className="pb-4 px-8 text-neutral-100">
          Build your brand recognition and get details insights on how your links are performing
        </p>
        <ButtonStart title={"Get Started"} />
      </div>
      <div className="mb-12"> </div>
      {/*Mobile side end*/}

      <div className="hidden pl-12 pc:grid grid-cols-2  ">
        <div className="text-start space-y-4">
          <h1 className="font-bold text-5xl">
            More than just <br/>shorter links
          </h1>
          <p className="pb-4 text-neutral-100">
            Build your brand recognition and get details insights on how your links are performing
             Build your brand recognition and get details insights on how your links are performing
          </p>
          <ButtonStart title={"Get Started"} />
        </div>
        <div className="">
          <img src={working} alt="Working" />
        </div>
      </div>
    </div>
  )
}

export default GetStarted