import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Graypaper from "../images/graypaper.png";
import Background from "../images/background.png";
import Wordmark from "../images/wordmark.png";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <div className="abstract">
        <p style={{ textAlign: "justify" }}>
          ABSTRACT. We present a comprehensive and formal definition of JAM, a
          protocol combining elements of both Polkadot and Ethereum. In a single
          coherent model, JAM provides a global singleton permissionless object
          environment-like the smart-contract environment pioneered by Ethereum-
          -much -paired with secure sideband computation parallelized over a
          scalable node network, a proposition pioneered by Polkadot. JAM
          introduces a decentralized hybrid system offering smart-contract
          functionality structured around a secure and scalable in-core/on-chain
          dualism. While the smart-contract functionality implies some
          similarities with Ethereum's paradigm, the overall model of the
          service offered is driven largely by underlying architecture of
          Polkadot. JAM is permissionless in nature, allowing anyone to deploy
          code as a service on it for a fee commensurate with the resources this
          code utilizes and to induce execution of this code through the
          procurement and allocation of core-time, a metric of resilient and
          ubiquitous computation, somewhat similar to the purchasing of gas in
          Ethereum. We already envision a Polkadot-compatible Core Chains
          service.
        </p>
        <a href={Graypaper}>
          <p>Download full Graypaper here.</p>
        </a>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>JAM</title>

    <link rel="stylesheet" href="https://latex.now.sh/style.css"></link>
    <meta
      name="description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://polkadot.network" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JAM Graypaper" />
    <meta
      property="og:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      property="og:image"
      content="https://opengraph.b-cdn.net/production/documents/83d1980a-1bb3-4db3-b64f-f05851e9cee0.png?token=nM98IeTAMa5qe5b0KkcqMGUxotMv6sbTNHKogUPKiIQ&height=630&width=1200&expires=33248677595"
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="polkadot.network" />
    <meta property="twitter:url" content="https://polkadot.network" />
    <meta name="twitter:title" content="JAM Graypaper" />
    <meta
      name="twitter:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      name="twitter:image"
      content="https://opengraph.b-cdn.net/production/documents/83d1980a-1bb3-4db3-b64f-f05851e9cee0.png?token=nM98IeTAMa5qe5b0KkcqMGUxotMv6sbTNHKogUPKiIQ&height=630&width=1200&expires=33248677595"
    />

    <body
      className="latex-dark bg-cover bg-black"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    />
  </>
);
