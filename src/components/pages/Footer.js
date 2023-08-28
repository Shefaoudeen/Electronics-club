import React from 'react'

import logowop from '../../assests/logowop.png'

const Footer = () => {
  return (
    <div>
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src={logowop} width={60} />
      <span class="ml-3 text-xl">Electronics Club</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 TEC —
      <a href="https://github.com/mogilogan" class="text-gray-900 ml-1 bg-yellow-400 rounded py-1 px-1" rel="noopener noreferrer" target="_blank">@FormerTreasurer</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4  sm:justify-start">
      <a class="ml-3 text-gray-500" href='https://instagram.com/electronics_club_ptu?igshid=MzRlODBiNWFlZA==' target='_blank'>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-[50px] h-15 text-red-600" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href='https://www.linkedin.com/in/electronics-club-ptu-69165328a/' target='_blank'>
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-[50px] h-15 text-blue-600" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer