# explainers

Interactive HTML explainers for technical topics — papers, datasets, and concepts you can read, run, and grasp intuitively.

Published via GitHub Pages: https://littlemex.github.io/explainers/

## Series

| Series | Topic | Entry |
|--------|-------|-------|
| ML basics | Transformer building blocks (Attention, FFN/MoE, normalization) and Flow Matching, each explained from scratch with live animations | [ml-basics-index.html](./ml-basics-index.html) |
| Attention lineage | MHA to GQA/MLA, sparsification (SWA/DSA), and linear/state-space models (Mamba), traced along a release-time family tree | [attention-series-index.html](./attention-series-index.html) |
| NKI Workshop | Writing high-performance kernels on AWS Trainium — hardware hierarchy, roofline, FlashAttention, tiling, low precision, collectives | [nki-workshop-index.html](./nki-workshop-index.html) |

### ML basics series

1. [Softmax Attention](./softmax-attention-explainer.html) — how Q/K/V mix, why the cost is N², bound analysis, and why FlashAttention works
2. [FFN to MoE](./ffn-moe-explainer.html) — the FFN workhorse vs. sparsely-activated MoE, and the GEMM-inefficiency → block-sparse (MegaBlocks) story
3. [RMSNorm](./rmsnorm-explainer.html) — why dropping the mean keeps quality while simplifying the implementation; cost and fused-kernel effects vs. LayerNorm
4. [Flow Matching](./flow-matching-explainer.html) — watch noise flow into data, and see how averaging straight-line paths yields the correct velocity field

## How it works

Each explainer is a single self-contained HTML file (inline CSS/JS, no build step). Open any file directly in a browser, or browse them from `index.html`.

## Publishing

GitHub Pages serves the repository root of the `main` branch. Add a new `*.html` file, link it from `index.html` (and the relevant series index), and push.
