type IFooterLink = {
    title : string,
    children : any
}
const FooterLink = ({title, children}: IFooterLink) => {
  return (
    <div className="">
        <h3 className=" text-center pt-6 pb-4 text-white font-bold ">{title}</h3>
        <ul>
            {children}
        </ul>
    </div>
  )
}

export default FooterLink