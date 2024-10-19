import React, { useEffect, useContext, createContext, useState } from "react";
import {
    useAddress,
    useContract,
    useContractWrite,
    useContractRead,
    useContractEvents
} from "@thirdweb-dev/react";
export const AmazonContext = createContext();

export const AmazonContextProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [tokenAmount, setTokenAmount] = useState("");
    const [amountDue, setAmountDue] = useState("");
    const [etherscanLink, setEtherscanLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState("");

    
    const address = useAddress();
    
    return (
      <AmazonContext.Provider
        value={{
          address,
        }}
      >
        {children}
      </AmazonContext.Provider>
    );
}

export const useAmazonContext = () => useContext(AmazonContext);