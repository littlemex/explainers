# explainers

Interactive HTML explainers for technical topics — papers, datasets, and concepts you can read, run, and grasp intuitively.

Published via GitHub Pages: https://littlemex.github.io/explainers/

## Contents

| Page | Topic | Description |
|------|-------|-------------|
| [flow-matching-explainer.html](./flow-matching-explainer.html) | Generative models | Flow Matching from scratch — watch noise flow into data, and see how averaging straight-line paths yields the correct velocity field. Bridges to Meta Flow Matching. |

## How it works

Each explainer is a single self-contained HTML file (inline CSS/JS, no build step). Open any file directly in a browser, or browse them from `index.html`.

## Publishing

GitHub Pages serves the repository root of the `main` branch. Add a new `*.html` file, link it from `index.html`, and push.

- [RMSNorm をビジュアルに理解する](rmsnorm-explainer.html) — LayerNorm との違い・計算コスト・Fused Kernel を動くアニメで理解

- [Softmax Attention をビジュアルに理解する](softmax-attention-explainer.html) — QKV の仕組み・N² の計算コスト・バウンド判定・FlashAttention を動くアニメで理解

- [FFN から MoE へ](ffn-moe-explainer.html) — FFN/MoE の違い・MoE の GEMM 非効率・MegaBlocks のブロックスパースを動くアニメで理解

- [NKI Workshop シリーズ](nki-workshop/index.html) — AWS Trainium カーネル入門。01: ハードウェア階層 (HBM/SBUF/PSUM・容量と帯域・GPUとの違い)
  - 02: [Roofline とカーネル融合](nki-workshop/02-roofline-and-fusion.html) — 理論上限の測り方・メモリ往復を消す融合・RMSNorm+QKV融合の実例
