export default function Incubation() {
  return (
    <div className='flex items-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto'>
        <div className='max-w-lg mx-auto my-4'>
          <div className='text-center'>
            <h1 className='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
              Get your project and ideas incubated
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Inquire for project or ideas incubations?
            </p>
          </div>
          <div className='m-7'>
            <div className='relative p-8 bg-white shadow-sm sm:rounded-xl'>
              <form className='w-full'>
                <div className='relative mb-5 floatingLabel_floating-input__uypIu'>
                  <input
                    type='email'
                    id='email'
                    className='w-full h-16 p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 focus:shadow-sm dark:border-gray-700'
                    placeholder=''
                    autoComplete='off'
                  />
                  <label
                    htmlFor='email'
                    className='absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform pointer-events-none '
                  >
                    Email address
                  </label>
                </div>
                <div className='relative mb-5 floatingLabel_floating-input__uypIu'>
                  <input
                    type='text'
                    id='password'
                    className='w-full h-16 p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 focus:shadow-sm dark:border-gray-700'
                    placeholder=''
                    autoComplete='off'
                  />
                  <label
                    htmlFor='password'
                    className='absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform pointer-events-none '
                  >
                    Phone Number
                  </label>
                </div>
                <button className='w-full p-3 text-white bg-indigo-600 rounded-md'>
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
