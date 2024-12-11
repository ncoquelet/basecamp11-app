#[starknet::interface]
trait ICounter<T> {
    fn get_counter(self: @T) -> u32;
    fn increase_counter(ref self: T);
    fn decrease_counter(ref self: T);
    fn reset_counter(ref self: T);
}


#[starknet::contract]
mod Counter {
    use super::ICounter;
    use openzeppelin_access::ownable::OwnableComponent;
    use starknet::ContractAddress;
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess};

    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[storage]
    struct Storage {
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
        counter: u32,
    }


    // Ownable Mixin
    #[abi(embed_v0)]
    impl OwnableMixinImpl = OwnableComponent::OwnableMixinImpl<ContractState>;
    impl InternalImpl = OwnableComponent::InternalImpl<ContractState>;

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        CounterIncreased: CounterIncreased,
        CounterDecreased: CounterDecreased,
        CounterReset: CounterReset,
        #[flat]
        OwnableEvent: OwnableComponent::Event
    }

    #[derive(Drop, starknet::Event)]
    struct CounterIncreased {
        counter: u32,
    }

    #[derive(Drop, starknet::Event)]
    struct CounterDecreased {
        counter: u32,
    }

    #[derive(Drop, starknet::Event)]
    struct CounterReset {
    }

    #[constructor]
    fn constructor(ref self: ContractState, owner: ContractAddress,  init_value: u32 ) {
        self.counter.write(init_value);
        self.ownable.initializer(owner);
    }

    #[abi(embed_v0)]
    impl CounterImpl of ICounter<ContractState> {
        fn get_counter(self: @ContractState) -> u32 {
           self.counter.read()
        }

        fn increase_counter(ref self: ContractState) {
            let current_value = self.counter.read();
            let new_value = current_value + 1;
            self.counter.write(new_value);
            self.emit(CounterIncreased{counter: new_value});
        }

        fn decrease_counter(ref self: ContractState) {
            let current_value = self.counter.read();
            assert(current_value > 0, 'Error');
            let new_value = current_value - 1;
            self.counter.write(new_value);
            self.emit(CounterDecreased{counter: new_value});
        }

        fn reset_counter(ref self: ContractState) {
            self.counter.write(0);
            self.emit(CounterReset{});
        }
    }
}
