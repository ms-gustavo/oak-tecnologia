import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 2em;
    margin: 0;
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #f3f4f6;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3 {
    text-align: center;
    color: #222;
    margin-bottom: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }

  input, textarea, select {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus, select:focus {
    border-color: #4CAF50;
    outline: none;
  }

  form {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  span {
    color: #d32f2f;
    font-size: 12px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  table th, table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  table tbody tr:hover {
    background-color: #f1f1f1;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;
