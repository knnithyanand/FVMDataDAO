export default function Welcome() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mf:flex-row flex flex-col items-start justify-between py-12 px-4 md:p-20">
        <div className="mf:mr-10 flex flex-1 flex-col items-start justify-start">
          <h1 className="text-gradient py-1 text-3xl text-white sm:text-5xl">
            Spatial DAO <br /> for planet scale data
          </h1>
          <p className="mt-5 w-11/12 text-left text-base font-light text-white md:w-9/12">
            Explore curated spatial datasets. Purchase data for specific regions
            for analysis and share the results with the community.
          </p>

          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                Reliable
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                100%
              </dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                Access
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                24/7
              </dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                Requests
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                100k+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
