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
      </div>
    </div>
  );
}
