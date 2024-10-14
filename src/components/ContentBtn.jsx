
const ContentBtn = ({children}) => {
  return (
    <div className="bg-green-400 hover:bg-green-600/10 text-white hover:text-green-600 hover:border-2 hover:border-green-600 rounded-lg w-fit px-3 py-1.5">
        {children}
    </div>
  )
}

export default ContentBtn