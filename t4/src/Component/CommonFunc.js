import { NavLink } from "react-router-dom";
export function targetUser(data, name) {
  let target;
  for (let i = 0; i < data.length; i++) {
    if (([data[i].name].toString() === name) === true) {
      return (target = i);
    }
  }
}
export function Btn(Link, name) {
  return (
    <NavLink to={Link}>
      <button type="button" className="btn btn-secondary">
        {name}
      </button>
    </NavLink>
  );
}

export function navLink(link, Name) {
    return (
      <li class="nav-item">
        <NavLink className="nav-link active" to={link}>
          {Name}
        </NavLink>
      </li>
    );
  }

