export const ABI = [
  {
    "type": "impl",
    "name": "CounterImpl",
    "interface_name": "sn_workshop::counter::counter::ICounter"
  },
  {
    "type": "interface",
    "name": "sn_workshop::counter::counter::ICounter",
    "items": [
      {
        "type": "function",
        "name": "get_counter",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "increase_counter",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "decrease_counter",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "reset_counter",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "impl",
    "name": "OwnableMixinImpl",
    "interface_name": "openzeppelin_access::ownable::interface::OwnableABI"
  },
  {
    "type": "interface",
    "name": "openzeppelin_access::ownable::interface::OwnableABI",
    "items": [
      {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "transfer_ownership",
        "inputs": [
          {
            "name": "new_owner",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "renounce_ownership",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
          {
            "name": "newOwner",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "init_value",
        "type": "core::integer::u32"
      }
    ]
  },
  {
    "type": "event",
    "name": "sn_workshop::counter::counter::Counter::CounterIncreased",
    "kind": "struct",
    "members": [
      {
        "name": "counter",
        "type": "core::integer::u32",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "sn_workshop::counter::counter::Counter::CounterDecreased",
    "kind": "struct",
    "members": [
      {
        "name": "counter",
        "type": "core::integer::u32",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "sn_workshop::counter::counter::Counter::CounterReset",
    "kind": "struct",
    "members": []
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "OwnershipTransferred",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        "kind": "nested"
      },
      {
        "name": "OwnershipTransferStarted",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "sn_workshop::counter::counter::Counter::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "CounterIncreased",
        "type": "sn_workshop::counter::counter::Counter::CounterIncreased",
        "kind": "nested"
      },
      {
        "name": "CounterDecreased",
        "type": "sn_workshop::counter::counter::Counter::CounterDecreased",
        "kind": "nested"
      },
      {
        "name": "CounterReset",
        "type": "sn_workshop::counter::counter::Counter::CounterReset",
        "kind": "nested"
      },
      {
        "name": "OwnableEvent",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        "kind": "flat"
      }
    ]
  }
] as const;
