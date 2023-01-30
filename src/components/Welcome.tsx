const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
}: {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism my-2 w-full rounded-sm border-none bg-transparent p-2 text-sm text-white outline-none"
  />
);

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
          {/* {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="my-5 flex cursor-pointer flex-row items-center justify-center rounded-full bg-[#2952e3] p-3 hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="mr-2 text-white" />
              <p className="text-base font-semibold text-white">
                Connect Wallet
              </p>
            </button>
          )} */}

          <div className="mt-10 grid w-full grid-cols-2 sm:grid-cols-3">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliabile
            </div>
            <div className={companyCommonStyles}>Trustworthy</div>
            <div className={companyCommonStyles}>Filecoin</div>
            <div className={companyCommonStyles}>Web 3.0</div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        {/* <div className="mf:mt-0 mt-10 flex w-full flex-1 flex-col items-center justify-start">
          <div className="eth-card .white-glassmorphism my-5 flex h-40 w-full flex-col items-start justify-end rounded-xl p-3 sm:w-72 ">
            <div className="flex h-full w-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-light text-white">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="blue-glassmorphism flex w-full flex-col items-center justify-start p-5 sm:w-96">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="my-2 h-[1px] w-full bg-gray-400" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-2 w-full cursor-pointer rounded-full border-[1px] border-[#3d4f7c] p-2 text-white hover:bg-[#3d4f7c]"
              >
                Send now
              </button>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
