import * as React from "react";
import Planche from "../Planche";

const planches = [
  {
    legume: "tomates",
    d: "M28.7914 224.238L201.939 124.401C202.899 123.847 204.088 123.868 205.028 124.457L208.04 126.341C209.953 127.538 209.91 130.339 207.96 131.476L36.1639 231.65C35.2826 232.164 34.2006 232.195 33.2915 231.732L28.9287 229.51C26.807 228.43 26.7288 225.427 28.7914 224.238Z",
  },
  {
    legume: "salades",
    d: "M46.7914 234.738L219.939 134.901C220.899 134.347 222.088 134.368 223.028 134.957L226.04 136.841C227.953 138.038 227.91 140.839 225.96 141.976L54.1639 242.15C53.2826 242.664 52.2006 242.695 51.2915 242.232L46.9287 240.01C44.807 238.93 44.7288 235.927 46.7914 234.738Z",
  },
  {
    legume: "oignons",
    d: "M64.7914 245.238L237.939 145.401C238.899 144.847 240.088 144.868 241.028 145.457L244.04 147.341C245.953 148.538 245.91 151.339 243.96 152.476L72.1639 252.65C71.2826 253.164 70.2006 253.195 69.2915 252.732L64.9287 250.51C62.807 249.43 62.7288 246.427 64.7914 245.238Z",
  },
];

const Parcelle1 = () => {
  const planchesRender = planches.map((planche, index) => {
    return <Planche legume={planche.legume} d={planche.d} index={index} />;
  });

  return (
    <>
      {planchesRender}
      <path
        id="contour"
        d="M356.627 208.393L170.101 316.084C167.948 317.326 164.459 317.326 162.306 316.084L8.88858 227.508C6.73628 226.265 6.73626 224.251 8.88859 223.008L195.415 115.317C197.567 114.074 201.057 114.074 203.209 115.317L356.627 203.893C358.78 205.135 358.78 207.15 356.627 208.393Z"
      />
    </>
  );
};

export default Parcelle1;
