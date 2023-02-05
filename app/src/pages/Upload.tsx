import { Web3Storage } from "web3.storage";
import { FileUpload } from "../components";

export default function Empty() {
  let state = {
    files: [] as File[],
  };

  function handleDrop(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      state.files.push(files[i]);
    }
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    // const client = new Web3Storage({ token: "process.env.WEB3STORAGE_TOKEN" });
    const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJhNjY4NWUzMjk3MWJDMTE5Qjg0ODRmYkZEZWVlNkJGNEFDQzFhMDAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzU1OTI4NjQ0NDYsIm5hbWUiOiJzcGF0aWFsLTAxIn0.ZR09mITaI3pugBvE_IMoYp1CZWsZ73rUACOyxE327Sc" });
    const cid = await client.put(state.files);
    console.log("stored files with cid:", cid);
  }

  return (
    <div className="container mx-auto py-8 sm:px-6">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Publish Dataset
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-8 sm:px-6">
        <form className="space-y-6" action="#" method="POST">
          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              {/* Side Section */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Dataset Info
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              {/* Form Section */}
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  {/* Name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Location */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Description */}
                  <div className="col-span-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Short description of the dataset."
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your dataset. URLs are hyperlinked.
                    </p>
                  </div>
                  {/* Price */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="0.00"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Email Address */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      placeholder="someone@example.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* File Upload */}
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Data Files
                    </label>
                    <FileUpload handleDrop={handleDrop} />
                  </div>
                </div>
              </div>
              {/* Form Section */}
              <div className="mt-5 space-y-6 md:col-span-2 md:mt-0"></div>
            </div>
          </div>

          {/* Form Controls */}
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
