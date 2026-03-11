type Artifact = {
  artifactId: string;
  registryClass: string;
  ownerWallet: string;
  ethPaid: string;
  txHash: string;
  blockNumber: string;
  timestamp: string;
};

function Row({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-2 border-b border-white/10 py-1.5 last:border-b-0">
      <div className="text-[9px] uppercase tracking-[0.22em] text-white/40">
        {label}
      </div>

      <div className={`text-[12px] text-white ${mono ? "font-mono break-all" : ""}`}>
        {value}
      </div>
    </div>
  );
}

export default function ReceiptCard({ artifact }: { artifact: Artifact }) {
  return (
    <div className="print-receipt relative w-full max-w-[420px] rounded-[22px] border border-[#d4af37]/25 bg-black/70 p-4 backdrop-blur-xl">
      <div className="text-[9px] uppercase tracking-[0.32em] text-[#f3d77a]/80">
        Voltara Verification Standard
      </div>

      <div className="mt-1 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Artifact Receipt</h2>

        <div className="rounded-full border border-[#d4af37]/30 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[#f3d77a]">
          Verified
        </div>
      </div>

      <p className="mb-3 text-[11px] text-white/50">
        Private ledger-style proof artifact
      </p>

      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <Row label="Artifact ID" value={artifact.artifactId} mono />
        <Row label="Class" value={artifact.registryClass} />
        <Row label="Wallet" value={artifact.ownerWallet} mono />
        <Row label="ETH Paid" value={artifact.ethPaid} />
        <Row label="Block" value={artifact.blockNumber} />
        <Row label="Timestamp" value={artifact.timestamp} />
        <Row label="TX Hash" value={artifact.txHash} mono />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">
            Registry Seal
          </div>

          <div className="mt-1 h-9 w-9 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10" />
        </div>

        <div className="text-right">
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">
            Network
          </div>

          <div className="text-[12px] text-white/80">Ethereum Mainnet</div>
        </div>
      </div>
    </div>
  );
}