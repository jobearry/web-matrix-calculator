export const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="h-16 w-full grid place-items-center grid-cols-1 border-t text-gray-400 border-gray-500">
      <span><a href="https://github.com/jobearry" target="_blank" className="hover:text-gray-300">Jobearry</a> @{currYear}</span>
    </footer>
  )
}