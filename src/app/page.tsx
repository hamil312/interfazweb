'use client'
import Image from "next/image";
import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <section className="grid grid-cols-[auto] min-h-screen lg:grid-cols-[auto_1fr]">
      <section className="hidden bg-maincolor-400 dark:bg-maincolor-800 flex-col pr-32 lg:flex">
        <section>
          <img src="https://tailwindui.com/img/logos/mark.svg?color=white" className="size-10 ml-2 mt-2"></img>
          <ThemeSwitch />
        </section>
        <section className="flex flex-col mt-5">
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><svg className="size-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg><p className="font-[family-name:var(--font-tiny5-regular)]">Dashboard</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><svg className="size-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg><p className="font-[family-name:var(--font-tiny5-regular)]">Team</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400  mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><svg className="size-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg><p className="font-[family-name:var(--font-tiny5-regular)]">Projects</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><svg className="size-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg><p className="font-[family-name:var(--font-tiny5-regular)]">Calendar</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400  mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><svg className="size-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg><p className="font-[family-name:var(--font-tiny5-regular)]">Documents</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><svg className="size-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z "></path></svg><p className="font-[family-name:var(--font-tiny5-regular)]">Reports</p></button>
        </section>
        <section className="flex flex-col mt-5">
          <p className="text-white font-[family-name:var(--font-tiny5-regular)] ml-3">Your Teams</p>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mt-3 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><p className="bg-indigo-400 mr-1 border-2 border-solid border-white rounded-sm px-1">H</p><p className="font-[family-name:var(--font-tiny5-regular)]">Heroicons</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><p className="bg-indigo-400 mr-1 border-2 border-solid border-white rounded-sm px-1">T</p><p className="font-[family-name:var(--font-tiny5-regular)]">Tailwind Labs</p></button>
          <button className="bg-maincolor-500 hover:bg-maincolor-900 dark:bg-maincolor-700 dark:hover:bg-maincolor-400 mr-2 ml-2 mb-1 rounded-sm text-white text-left flex flex-row p-2"><p className="bg-indigo-400 mr-1 border-2 border-solid border-white rounded-sm px-1">W</p><p className="font-[family-name:var(--font-tiny5-regular)]">Workcation</p></button>
        </section>
        <section className="flex flex-row text-white text-left font-bold ml-2 mt-40">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="size-10 rounded-full"></img>
          <p className="pt-2 pl-1 font-[family-name:var(--font-tiny5-regular)]">Tim Cook</p>
        </section>

      </section>
        
      <main className="flex flex-col bg-maincolor-200 dark:bg-maincolor-400 md:place-items-center md:place-content-center">
        <article className="bg-maincolor-300 dark:bg-maincolor-600 rounded-lg flex flex-col shadow-lg sm:m-5 sm:h-full md:m-0 md:h-auto max-[640px]:rounded-none max-[640px]:m-5 max-[640px]:h-full">
          <section className="grid grid-rows-[auto_auto] grid-cols-[auto_auto] m-5 border-solid border-b-2 pb-5 place-items-start">
            <img className="row-span-2 rounded-lg size-30" src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"></img>
            <h1 className="font-[family-name:var(--font-tiny5-regular)] text-xl">Basic</h1>
            <section className="grid grid-rows-3 grid-cols-[auto_1fr_auto]">
              <p className="font-[family-name:var(--font-tiny5-regular)] row-span-1 col-span-1 col-start-1 row-start-1 text-gray-400">$</p>
              <p className="font-[family-name:var(--font-tiny5-regular)] row-span-3 text-4xl">10</p>
              <p className="font-[family-name:var(--font-tiny5-regular)] row-span-1 col-start-3 row-end-3 text-gray-400">/user</p>
            </section>
          </section>
          <section className="flex flex-col mx-5 mb-5 mt-2">
            <p className="flex flex-row font-[family-name:var(--font-tiny5-regular)]"><img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" className="pr-1"></img>Get Started with <b className="pl-1">messaging</b></p>
            <p className="flex flex-row font-[family-name:var(--font-tiny5-regular)]"><img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" className="pr-1"></img>Flexible <b className="pl-1">team meetings</b></p>
            <p className="flex flex-row font-[family-name:var(--font-tiny5-regular)]"><img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" className="pr-1"></img><b className="pr-1">5 TB</b> Cloud Storage</p>
            <button className="flex flex-row bg-maincolor-500 dark:bg-maincolor-900 rounded-md mt-5 place-content-center p-2"><p className="text-white font-[family-name:var(--font-tiny5-regular)]">Choose Plan</p><img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="mt-1"></img></button>
          </section>
        </article>
      </main>
    </section>
  );
}
