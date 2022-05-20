export const CONTRACT = "0xf8E6fdA2Dcb9acB516bae257c3E1fd80a4Ffea89";
export const bytecode = {
  abi: [
    {
      inputs: [{ internalType: "uint8", name: "_maxaddr", type: "uint8" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [{ internalType: "address", name: "_addr", type: "address" }],
      name: "addAddressToWhite",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "maxWhitelistedAddresses",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numAddressesWhitelisted",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "whitelistedAddresses",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
  ],
  object:
    "608060405234801561001057600080fd5b506040516105c33803806105c383398181016040528101906100329190610067565b806000806101000a81548160ff021916908360ff160217905550506100b4565b6000815190506100618161009d565b92915050565b60006020828403121561007957600080fd5b600061008784828501610052565b91505092915050565b600060ff82169050919050565b6100a681610090565b81146100b157600080fd5b50565b610500806100c36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d81461005157806331a72188146100815780634011d7cd1461009f578063925d9ea2146100bd575b600080fd5b61006b600480360381019061006691906102b4565b6100d9565b604051610078919061037b565b60405180910390f35b6100896100f9565b60405161009691906103d6565b60405180910390f35b6100a761010a565b6040516100b491906103d6565b60405180910390f35b6100d760048036038101906100d291906102b4565b61011d565b005b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a1906103b6565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff161061020e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020590610396565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008282829054906101000a900460ff166102849190610402565b92506101000a81548160ff021916908360ff16021790555050565b6000813590506102ae816104b3565b92915050565b6000602082840312156102c657600080fd5b60006102d48482850161029f565b91505092915050565b6102e68161044b565b82525050565b60006102f9600e836103f1565b91507f4c697374206578686175737465640000000000000000000000000000000000006000830152602082019050919050565b60006103396019836103f1565b91507f5573657220616c7265616479207768697465206c6973746564000000000000006000830152602082019050919050565b61037581610477565b82525050565b600060208201905061039060008301846102dd565b92915050565b600060208201905081810360008301526103af816102ec565b9050919050565b600060208201905081810360008301526103cf8161032c565b9050919050565b60006020820190506103eb600083018461036c565b92915050565b600082825260208201905092915050565b600061040d82610477565b915061041883610477565b92508260ff0382111561042e5761042d610484565b5b828201905092915050565b600061044482610457565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6104bc81610439565b81146104c757600080fd5b5056fea26469706673582212206cbda2d97050a9a2c03087b704a5151127fe5d38535f3565dcd397d4d958c6b964736f6c63430008000033",
};
export const abi = bytecode.abi;
