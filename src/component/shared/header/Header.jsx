// components/shared/header/Header.jsx
function Header({title, rightContent}) {
  return (
    <header className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {rightContent ? (
        <div className="flex items-center gap-3">{rightContent}</div>
      ) : null}
    </header>
  );
}

export default Header;
