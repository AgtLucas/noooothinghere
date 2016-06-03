# Redux: Describing State Changes with Actions

* You can't modify or write it
* Any time you want to change the state, you need to dispatch an `action`
* An `action` it's a plain JS object describing the change
* The state it's the minimum representation of the data in your app
* The action it's the minimum representation of the change to the data
* The only requirement; a `type` property which isn't undefined
* Strings because they are serializable
* Any data gets there by actions
