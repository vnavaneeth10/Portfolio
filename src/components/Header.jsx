

const NavList = [
    {
        id: 1,
        data: "Home"
    },
    {
        id: 2,
        data: "Projects"
    },
    {
        id: 3,
        data: "Experience"
    },
    {
        id: 4,
        data: "Education"
    },
    {
        id: 5,
        data: "Contact"
    }
]


const Header = () => {

  return (

    <header className="fixed w-[1080px] md:w-full flex justify-between items-center p-4 z-50">
      
      <a href="#" className="text-3xl font-extrabold text-red-600 text-shadow-xl hover:scale-110 transition duration-500">NAVANEETH</a>
      
      <nav className="hidden md:flex">
        {NavList.map((items)=>(<a key={items.id} href="#" className="ml-8 font-medium text-white hover:text-red-500 border-b-2 ">{items.data}</a>))}
        
      </nav>

    </header>

  )
}

export default Header