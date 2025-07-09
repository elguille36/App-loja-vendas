import { NavLink } from "react-router-dom";

function CategoryNav({ categories }) {
  return (
    <nav className="category-nav" aria-label="Categorias de produtos">
      <ul role="list">
        {categories.map((category) => {
          const to = category === '' ? '/produtos' : `/produtos/${category}`;
          const label = category === '' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <li key={category}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategoryNav;