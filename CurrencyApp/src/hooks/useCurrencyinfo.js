import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) {
      setData({});
      return;
    }

    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates || {})) // 🔥 only this changed
      .catch(() => setData({}));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;