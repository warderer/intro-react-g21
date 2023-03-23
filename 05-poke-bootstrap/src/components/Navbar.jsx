const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <a className='navbar-brand' href='#'>Pokédex</a>

      <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li class='nav-item px-2'>
          <a class='nav-link' href='/'>Home</a>
        </li>
        <li class='nav-item px-2'>
          <a class='nav-link' href='/about'>Acerca de Pokémon</a>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
