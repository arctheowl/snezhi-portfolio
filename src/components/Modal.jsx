'use client'

import { Fragment, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function ImageModal({ image, title }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="max-h-4xl relative mx-24 max-w-6xl transform items-center rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:p-2">
                    <button
                      type="button"
                      className=" absolute right-2 top-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                    <a href={image} target="_blank">
                      <Image
                        src={image}
                        alt={title}
                        className=""
                        sizes="(max-width: 768px) 100vw"
                        width={5000}
                        height={5000}
                      />
                    </a>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : (
        <div className="h-96 w-96">
          <button onClick={() => setOpen(true)}>
            <Image
              src={image}
              alt={title}
              sizes="(max-width: 768px) 100vw"
              width={500}
              height={500}
            />
          </button>
        </div>
      )}
    </>
  )
}
