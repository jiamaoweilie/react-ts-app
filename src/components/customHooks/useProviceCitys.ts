import { City, PROVINCE_CITYS } from "../../constants/citys";
import { useState, useEffect } from "react";

export const useProviceCitys: (
  defaultProviceName: string
) => [City[], (proviceName: string) => void] = (defaultProvice) => {
  const [proviceName, setProviceName] = useState(defaultProvice);
  const [citys, setCitys] = useState([] as City[]);

  useEffect(() => {
    if (proviceName !== "") {
      const province = PROVINCE_CITYS.filter(
        (province) => province.provinceName === proviceName
      );
      setCitys(province[0].citys);
    } else {
      setCitys([]);
    }
  }, [proviceName]);

  return [citys, setProviceName];
};
