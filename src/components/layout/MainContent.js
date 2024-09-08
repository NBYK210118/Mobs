const MainContent = ({ children }) => (
  <main className="flex-1 p-4 mt-4">
    <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
  </main>
);

export default MainContent;
