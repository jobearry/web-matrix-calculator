export const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 left-0 h-16 w-full grid place-items-center">
      Jobearry @{currYear}
    </footer>
  )
}