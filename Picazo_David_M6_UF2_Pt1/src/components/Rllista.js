import React,{useState,UseEffect} from "react";
export function TablaComp(props) {
    const { datos, cap } = props;
  
    return (
      <table>
        <thead>
          <tr>
            {cap.map((header, index) => (
              <th key={index}>{header.cap}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              {cap.map((header, idx) => (
                <td key={idx}>{item[header.camp]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
