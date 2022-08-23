<<<<<<< HEAD
export const Navbar = () => {
    return (
      <div className="navbar">
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link className="nav-admin" to="/admin">
          Admin
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
  
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>
    );
=======
export const Navbar = () => {
    return (
      <div className="navbar">
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link className="nav-admin" to="/admin">
          Admin
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
  
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>
    );
>>>>>>> d5ce0a4c7925bab9adb288be154472707500bb3d
  };