
---

## 3. `docs/diagrams/data-flow-diagram.md`

This is **very important for viva**.

```md
# Data Flow Diagram
## OpenSea Trust Layer

```mermaid
sequenceDiagram
    participant Wallet
    participant Blockchain
    participant Indexer
    participant AIEngine
    participant Backend
    participant SmartContract
    participant UI

    Wallet->>Blockchain: NFT transaction
    Blockchain->>Indexer: Emit event
    Indexer->>Backend: Structured data
    Backend->>AIEngine: Wallet behavior data
    AIEngine->>Backend: Trust score + risk
    Backend->>SmartContract: Update SBT
    Backend->>UI: Trust score API response
    UI->>Wallet: Display reputation
