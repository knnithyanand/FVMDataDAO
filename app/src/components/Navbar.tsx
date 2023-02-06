import { ethers } from "ethers";
import { Component } from "react";

import logo from "../images/logo.png";

const navigation = [
  { name: "Market", href: "/market" },
  { name: "Exchange", href: "/exchange" },
  { name: "Wallet", href: "/empty" },
  { name: "My Data", href: "/upload" },
];

declare global {
  interface Window {
    ethereum: any;
  }
}

export default class Navbar extends Component {
  state!: Readonly<{
    account: string;
    accountMask: string;
    isLogin: boolean;
  }>;
  componentDidMount(): void {
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      this.setState({
        account: "none",
        isLogin: false,
      });
    });
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);

  handleLogin = async () => {
    try {
      let accts = await this.provider.send("eth_requestAccounts", []);
      await this.provider.getBlockNumber();
      const addr = await this.provider.listAccounts();
      console.log(accts);
      let balance = await this.provider.getBalance(addr[0]);
      ethers.utils.formatEther(balance);
      console.log(balance);

      const signer = this.provider.getSigner();
      let signature = await signer.signMessage("Spatial DAO");

      console.log(signature);
      this.setState({
        isLogin: true,
        account: addr[0],
        accountMask: addr[0].substr(0, 6) + "..." + addr[0].substr(-4),
      });
    } catch (error) {}
  };

  render() {
    return (
      <header className="bg-indigo-600">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <button
                type="button"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                onClick={this.handleLogin}
              >
                {this.state?.isLogin ? this.state.accountMask : "Login"}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
  }
}
