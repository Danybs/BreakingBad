import React from "react";
import { useTranslation } from "react-i18next";
import SimpleList from "./SimpleList";

const ComplexList = ({ char, blackList }) => {
  /**
   * return only list with 1 nested level
   * return only items that are not blacklisted
   * return only items that are not empty
   *  */
  const [t] = useTranslation("global");
  return (
    <ul>
      {Object.entries(char || [])
        .filter(([k, v]) => {
          if (typeof v === "object" && v.length === 0) {
            return false;
          }
          if (blackList.includes(k)) {
            return false;
          }
          return true;
        })
        .map(([key, value]) => {
          return (
            <li style={{ listStyleType: "none" }} key={key}>
              <strong style={{ color: "#5bbd2a" }}>
                {t(`details.${key}`)}
              </strong>
              {/* sublist */}
              {typeof value === "object" ? (
                <SimpleList subList={value} />
              ) : (
                <p>{value}</p>
              )}
            </li>
          );
        })}
    </ul>
  );
};
export default ComplexList;
