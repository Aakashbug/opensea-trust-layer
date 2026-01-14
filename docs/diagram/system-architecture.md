# System Architecture Diagram
## OpenSea Trust Layer

---

## High-Level System Diagram

```mermaid
flowchart LR
    A[User Wallet / NFT Marketplace] --> B[Blockchain Network]
    B --> C[Indexer & Data Ingestion]
    C --> D[AI Reputation Engine]
    D --> E[Trust Score Generator]
    E --> F[On-Chain Reputation SBT]
    E --> G[Trust API / SDK]
    G --> H[Marketplace UI]
Explanation

User Wallet / Marketplace

Initiates interactions such as NFT trading or wallet queries.

Blockchain Network

Stores immutable transaction and contract data.

Indexer & Data Ingestion

Extracts and structures blockchain events for analysis.

AI Reputation Engine

Processes behavioral data to compute trust and risk metrics.

Trust Score Generator

Converts AI outputs into normalized scores and classifications.

On-Chain Reputation SBT

Stores trust scores in a non-transferable token.

Trust API / SDK

Exposes trust data to external platforms.

Marketplace UI

Displays trust badges, risk alerts, and reputation profiles.