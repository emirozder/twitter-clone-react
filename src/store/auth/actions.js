import { _setCurrentAccount } from ".";
import { store } from "..";


export const setCurrentAccount = (accountData) => store.dispatch(_setCurrentAccount(accountData));