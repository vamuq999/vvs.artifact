"use client";

import { useEffect, useState } from "react";
import ReceiptCard from "@/components/ReceiptCard";

function randomHash() {
  return `0x${Array.from({ length: 64 }, () =>
    "abcdef0123456789"[Math.floor(Math.random() * 16)]
  ).join("")}`;
}

function currentTimestamp() {
  return new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
}

export default function Home() {
  const [counter, setCounter] = useState(1);

  const [artifactId, setArtifactId] = useState("VVS-A-000001");
  const [registryClass, setRegistryClass] = useState("Treasury");
  const [ownerWallet, setOwnerWallet] = useState(
    "0x202637062382498A31d7a8203562ed46312366e4"
  );
  const [ethPaid, setEthPaid] = useState("0.0500 ETH");

  const [txHash, setTxHash] = useState("");
  const [blockNumber, setBlockNumber] = useState("22491873");
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTxHash(randomHash());
    setTimestamp(currentTimestamp());
  }, []);

  const artifact = {
    artifactId,
    registryClass,
    ownerWallet,
    ethPaid,
    txHash,
    blockNumber,
    timestamp,
  };

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="inline-block rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-[#f3d77a]">
            VVS Artifact
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white">
            Registry receipts with vault-level presence
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            A compact, ultra-wealthy artifact receipt for on-chain registry
            entries, cryptographic proofs, and collectible ledger moments.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f3d77a]/80">
              Receipt Builder
            </p>

            <h2 className="mt-2 mb-6 text-2xl font-semibold text-white">
              Artifact Inputs
            </h2>

            <div className="space-y-4">
              <Field label="Artifact ID" value={artifactId} onChange={setArtifactId} />
              <Field
                label="Registry Class"
                value={registryClass}
                onChange={setRegistryClass}
              />
              <Field
                label="Owner Wallet"
                value={ownerWallet}
                onChange={setOwnerWallet}
              />
              <Field label="ETH Paid" value={ethPaid} onChange={setEthPaid} />
              <Field label="TX Hash" value={txHash} onChange={setTxHash} />
              <Field
                label="Block Number"
                value={blockNumber}
                onChange={setBlockNumber}
              />

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    const next = counter + 1;
                    setCounter(next);
                    setArtifactId(`VVS-A-${String(next).padStart(6, "0")}`);
                    setTxHash(randomHash());
                    setBlockNumber(
                      String(22000000 + Math.floor(Math.random() * 1000000))
                    );
                    setTimestamp(currentTimestamp());
                  }}
                  className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f3d77a]"
                >
                  Generate New Receipt
                </button>

                <button
                  onClick={() => window.print()}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ReceiptCard artifact={artifact} />
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
        {label}
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
      />
    </label>
  );
}