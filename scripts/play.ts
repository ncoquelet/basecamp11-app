import * as dotenv from "dotenv";
import { Account, Contract, RpcProvider, constants } from "starknet";
import { ABI } from "../abi/Counter.abi";

dotenv.config();

async function play() {
  // initialize provider
  const provider = new RpcProvider({
    nodeUrl: "https://free-rpc.nethermind.io/sepolia-juno/v0_7",
  });

  // initialize existing account
  const privateKey = process.env.OZ_STRK_PKEY;
  const accountAddress =
    "0x007a97c24e4ceefedb278e94eeba31c1d32ab5495176a1193d38571984066971";

  if (!privateKey) {
    throw new Error("Private key or account address not found");
  }

  const account = new Account(provider, accountAddress, privateKey);

  const contractAddress =
    "0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c";
  const contract = new Contract(ABI, contractAddress, provider).typedv2(ABI);

  contract.connect(account);

  // Call get_count
  const count = await contract.get_counter();
  console.log("Current count:", count.toString());

  // Call increment
  const tx = await contract.increase_counter();
  console.log("Transaction hash:", tx.transaction_hash);
  await provider.waitForTransaction(tx.transaction_hash);

  // Call get_count
  const count2 = await contract.get_counter();
  console.log("Current count:", count2.toString());
}

play().catch(console.error);
