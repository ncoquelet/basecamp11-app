# Basecamp 11 App

This repository will be used by the teachers of Basecamp 11 to progressively build a Starknet application from start to finish that will include smart contracts, testing and frontend.

## Dev Environment

To activate the dev environment, make sure to have [Docker](https://www.docker.com/get-started/) and [VSCode](https://code.visualstudio.com/) installed on your system. On VSCode, make sure to install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension to make use of [this](https://hub.docker.com/r/starknetfoundation/starknet-dev) Docker image for Starknet development.

To launch an instance fo VSCode inside the container, go to `View` -> `Command Palette` and execute the command `Dev Containers: Rebuild and Reopen in Container`. At this point you should have an instance of VSCode with access to all required binaries (Scarb, Foundry, Starkli, etc.) on the integrated terminal and syntax highlighter for Cairo and Toml files.;


## Commands

### with Braavos account

```
❯ starkli signer keystore from-key keytore.json
Enter private key: 
Enter password: 
Created new encrypted keystore file: keystore.json
Public key: 0x00be609dd7887d67490d19ad7d9d70a7699921a7c235e0fa98ef52243fd4397e

❯ starkli account fetch 0x00120f19c8a6ed34e86f48dca85fd19bafc1e7c37972dc30063c857f7f57f5a6 --output account.json
Account contract type identified as: Braavos
Description: Braavos official account (as of v3.80.7)
Downloaded new account config file: account.json
```

```
❯ scarb build
   Compiling snforge_scarb_plugin v0.34.0 (git+https://github.com/foundry-rs/starknet-foundry?tag=v0.34.0#d6976d4635cbe69bd199fd502788c469d408ed2d)
    Finished `release` profile [optimized] target(s) in 0.17s
   Compiling sn_workshop v0.1.0 (/home/nicolas/dev/learning/starknet/basecamp11-app/Scarb.toml)
    Finished `dev` profile target(s) in 9 seconds
```

```
❯ starkli declare target/dev/sn_workshop_Counter.contract_class.json
Enter keystore password: 
Sierra compiler version not specified. Attempting to automatically decide version to use...
Network detected: sepolia. Using the default compiler version for this network: 2.9.1. Use the --compiler-version flag to choose a different version.
Declaring Cairo 1 class: 0x060fe01634fdebc9e482b172ac98c7be10e477deaeb2c606db91b4526a0fe498
Compiling Sierra class to CASM with compiler version 2.9.1...
CASM class hash: 0x04de428ab7f9c1352ab00773b7abe34942f5734aea8ffd7b02a13b5a69289251
Contract declaration transaction: 0x036fec1d5c444c6014e1792858a0562f6c575f8d138d3fc152351305c8949af3
Class hash declared:
0x060fe01634fdebc9e482b172ac98c7be10e477deaeb2c606db91b4526a0fe498

❯ starkli deploy 0x060fe01634fdebc9e482b172ac98c7be10e477deaeb2c606db91b4526a0fe498 0x00120f19c8a6ed34e86f48dca85fd19bafc1e7c37972dc30063c857f7f57f5a6 1
Enter keystore password: 
Deploying class 0x060fe01634fdebc9e482b172ac98c7be10e477deaeb2c606db91b4526a0fe498 with salt 0x075f6da91075994359ea942b8fee8f04c281d9f2716286f175cd28edd7fa854c...
The contract will be deployed at address 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d
Contract deployment transaction: 0x07580df5aa428f647980a54e730d8c37a4685237c478490aa6d4c8545017b55e
Contract deployed:
0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d
```

```
❯ starkli call 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d get_counter    
[
    "0x0000000000000000000000000000000000000000000000000000000000000003"
]

❯ starkli call 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d owner     
[
    "0x00120f19c8a6ed34e86f48dca85fd19bafc1e7c37972dc30063c857f7f57f5a6"
]

❯ starkli call 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d decrease_counter
[]

❯ starkli call 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d get_counter    
[
    "0x0000000000000000000000000000000000000000000000000000000000000003"
]

❯ starkli invoke 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d decrease_counter
Enter keystore password: 
Invoke transaction: 0x01c853cb815496cd2721aa5e2d87ceac4156b35f45322dc555a23d6f265e57ef

❯ starkli call 0x0561c0c4c9d8481e1ef74dee8225fc6dfb90dbfc0506b9f46a43eea11c52fe5d get_counter
[
    "0x0000000000000000000000000000000000000000000000000000000000000002"
]
```

### with oz dev account

```
❯ starkli account oz init account.json 
Enter password: 
Created new account config file: account.json

Once deployed, this account will be available at:
    0x007a97c24e4ceefedb278e94eeba31c1d32ab5495176a1193d38571984066971

Deploy this account by running:
    starkli account deploy account.json

❯ starkli account deploy account.json
Enter password: 
The estimated account deployment fee is 0.000000381738108609 ETH. However, to avoid failure, fund at least:
    0.000000572607162913 ETH
to the following address:
    0x007a97c24e4ceefedb278e94eeba31c1d32ab5495176a1193d38571984066971
Press [ENTER] once you've funded the address.
Account deployment transaction: 0x9c3f99656f5022a32b3f214eb1df54a2fb911a4da50b83f637849f536770d9
Waiting for transaction 0x9c3f99656f5022a32b3f214eb1df54a2fb911a4da50b83f637849f536770d9 to confirm. If this process is interrupted, you will need to run `starkli account fetch` to update the account file.
Transaction not confirmed yet...
Transaction 0x9c3f99656f5022a32b3f214eb1df54a2fb911a4da50b83f637849f536770d9 confirmed
```

```
❯ starkli deploy 0x060fe01634fdebc9e482b172ac98c7be10e477deaeb2c606db91b4526a0fe498 0x007a97c24e4ceefedb278e94eeba31c1d32ab5495176a1193d38571984066971 1
Enter password: 
Deploying class 0x060fe01634fdebc9e482b172ac98c7be10e477deaeb2c606db91b4526a0fe498 with salt 0x022fe2f60b4be0d2125183a3e7042dc77518a7663ab9fd61d24853be71c4315c...
The contract will be deployed at address 0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c
Contract deployment transaction: 0x6b3ed5551aeebd77d6fb57229499b514d370afb39cf040099061f2aef584ded
Contract deployed:
0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c
```

```
❯ starkli call 0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c get_counter                                                         
[
    "0x0000000000000000000000000000000000000000000000000000000000000001"
]

❯ starkli call 0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c owner                                                               
[
    "0x007a97c24e4ceefedb278e94eeba31c1d32ab5495176a1193d38571984066971"
]

❯ starkli invoke 0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c increase_counter                                                    
Enter password: 
Invoke transaction: 0x678975cd72d030f2308b75139312eddf53aa11acf6c35429a461072af2ff892

❯ starkli call 0x0425604c547646838422d6f10974f4f08893b8508c71132b26836036c1664f3c get_counter       
[
    "0x0000000000000000000000000000000000000000000000000000000000000002"
]
```