export default function Footer() {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Tristen Dillon. All rights reserved.</p>
        <p className="mt-1">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  )
}