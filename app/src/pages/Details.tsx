import { useRef } from "react";
import {
  PaperClipIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import H from "@here/maps-api-for-javascript";

export default function Details() {
  let ref = useRef(null);

  let platform = new H.service.Platform({
    apikey: "L8phnOxn2V5iLl8JH7b02knQSvnLH0UL2Ue7MsXuDTg",
  });

  let maptypes = platform.createDefaultLayers();

  if (ref.current) {
    let map = new H.Map(ref.current, maptypes.vector.normal.map, {
      zoom: 10,
      center: { lng: 13.4, lat: 52.51 },
    });

    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  }

  return (
    <div className="container mx-auto py-8 sm:px-6">
      <div ref={ref}></div>

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
                onClick={() => {
                  console.log("clicked");
                }}
              />
              New Request
            </button>
          </span>
        </div>
      </div>
      <div className="container mx-auto py-8 sm:px-6">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Dataset Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Margot Foster
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Application for
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Backend Developer
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  margotfoster@example.com
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  $120,000
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="/"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="/"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
