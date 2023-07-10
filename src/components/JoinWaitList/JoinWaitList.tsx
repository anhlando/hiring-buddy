import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  className?: string;
}

// yup schema
const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

const JoinWaitList: React.FC<Props> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const handleClick = async () => {
    setIsOpen(true);
  };

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    // send data
    const response = await fetch(
      import.meta.env.PUBLIC_API_ENDPOINT + "/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    await response.json();

    // show success message
    setIsSuccess(true);
    setIsLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);

    // set timeout
    setTimeout(() => {
      if (isSuccess) {
        // reset state
        form.reset({
          email: "",
        });
        setIsSuccess(false);
      }
    }, 1000);
  };

  return (
    <div className={clsx(className)}>
      <button
        onClick={handleClick}
        className={clsx(
          `transition inline-flex justify-center items-center text-white text-sm py-3 pl-14 pr-8 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-[25.04px] hover:from-[#0500FF] hover:to-[#0500FF]`
        )}
      >
        <span className="mr-5 font-montserrat">Join waitlist!</span>
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Enter your email to join the waitlist:
                  </Dialog.Title>

                  <div className={clsx(isSuccess && "hidden")}>
                    <p className="mt-2">
                      Count me in! We'll let you know when we're about to go live
                    </p>

                    <div className="mt-2">
                      <input
                        type="text"
                        className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                        {...form.register("email")}
                        placeholder="E.g: buddy@gmail.com"
                        disabled={isLoading}
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={form.handleSubmit(handleSubmit)}
                        disabled={isLoading}
                      >
                        Send!
                      </button>
                    </div>
                  </div>

                  <div className={clsx(!isSuccess && "hidden")}>
                    <p className="mt-2">
                    Congratulations, you've joined our waitlist and we're excited to have you join our journey!
                    </p>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default JoinWaitList;
