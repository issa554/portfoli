export default function Footer() {
    const now = new Date();
const currentYear = now.getFullYear();
  return (
  

<footer class="bg-teal-300 rounded-lg shadow m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center ">© {currentYear} <a href="/" class="hover:underline">Issa AbuAwada</a>. All Rights Reserved.
    </span>
  
    </div>
</footer>

  )
}
