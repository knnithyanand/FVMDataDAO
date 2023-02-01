import {
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { QuarryDataset } from "../data/datasets";

export default function Market() {
  return (
    <div className="container mx-auto py-8 sm:px-6">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Available Datasets
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Publish
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-white"
                aria-hidden="true"
              />
              New Request
            </button>
          </span>
        </div>
      </div>
      <div className="px-4 sm:px-0">
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Publisher
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Period
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {QuarryDataset.map((dataset) => (
                <tr key={dataset.publisher}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {dataset.name}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Location</dt>
                      <dd className="mt-1 truncate text-gray-700">
                        {dataset.location}
                      </dd>
                      <dt className="sr-only sm:hidden">Publisher</dt>
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">
                        {dataset.publisher}
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {dataset.location}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {dataset.publisher}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {dataset.period}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a
                      href={`/details/${dataset.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View<span className="sr-only">, {dataset.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
